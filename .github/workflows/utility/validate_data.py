import json
import os
import hashlib
from os import getcwd

rootdir = getcwd()

# -----FOR EACH CHAIN-----
def checkChains():
    for networkfolder in os.listdir(rootdir):
        if not os.path.isdir(networkfolder):
          continue
        for chainfolder in os.listdir(networkfolder):
          chainjson = os.path.join(networkfolder, chainfolder, "chain.json")
          print(chainjson + "  - " + str(os.path.exists(chainjson)))
          if not os.path.exists(chainjson):
              continue
          chainSchema = json.load(open(os.path.join(rootdir, chainjson)))
          assetlistjson = os.path.join(networkfolder, chainfolder, "assetlist.json")
          print(assetlistjson + "  - " + str(os.path.exists(assetlistjson)))
          if not os.path.exists(assetlistjson):
              continue
          assetlistSchema = json.load(open(os.path.join(rootdir, assetlistjson)))
          bases = []
          if "assets" in assetlistSchema:
            if assetlistSchema["assets"]:
              for asset in assetlistSchema["assets"]:
                assetDenoms = []
                if "denom_units" in asset:
                  if asset["denom_units"]:
                    for unit in asset["denom_units"]:
                      if "denom" in unit:
                        assetDenoms.append(unit["denom"])
                      if "aliases" in unit:
                        for alias in unit["aliases"]:
                          assetDenoms.append(alias)
                  else:
                    raise Exception("'denon_units' array doesn't contain any units")
                if "base" in asset:
                  if asset["base"] in assetDenoms:
                    bases.append(asset["base"])
                if "images" in asset:
                  for image in asset["images"]:
                    if "png" in image:
                      validateRawGithubContent(image["png"])
                    if "svg" in image:
                      validateRawGithubContent(image["svg"])
                if "logo_URIs" in asset:
                  if "png" in asset["logo_URIs"]:
                    validateRawGithubContent(asset["logo_URIs"]["png"])
                  if "svg" in asset["logo_URIs"]:
                    validateRawGithubContent(asset["logo_URIs"]["svg"])

                if "base" in asset and "traces" in asset:
                  validateTraces(asset["traces"], asset["base"])
            else:
              raise Exception("'assets' array doesn't contain any tokens")
          else:
            raise Exception("assetlist schema doesn't contain 'assets' array")

          # force chain_name to be same with folder name for uniqueness 
          if chainfolder != chainSchema["chain_name"]:
            raise Exception("folder name must be same with chain name (" + chainfolder +")")

          # raw.githubusercontent uri check
          if "images" in chainSchema:
            for image in chainSchema["images"]:
              if "png" in image:
                validateRawGithubContent(image["png"])
              if "svg" in image:
                validateRawGithubContent(image["svg"])

          if "logo_URIs" in chainSchema:
            if "png" in chainSchema["logo_URIs"]:
              validateRawGithubContent(chainSchema["logo_URIs"]["png"])
            if "svg" in chainSchema["logo_URIs"]:
              validateRawGithubContent(chainSchema["logo_URIs"]["svg"])

          

    print("Done")

# check the file exists
def validateRawGithubContent(uri: str):
  prefix = "https://raw.githubusercontent.com/initia-labs/initia-registry/main/"
  # check only if initia-registry main branch
  if not uri.startswith(prefix):
    return
  path = uri[len(prefix):]
  if not os.path.exists(path):
    raise Exception("file(" + path + ") doesn't exists")

# check trace
def validateTraces(traces, denom: str):
  denomBefore = None
  for trace in traces:
    baseDenom = trace["counterparty"]["base_denom"]
    if denomBefore != None and baseDenom != denomBefore:
      raise Exception("mislink denom traces")
    denomBefore = validateTrace(trace)

  if denomBefore != None and denomBefore != denom:
    print(denomBefore, denom)
    raise Exception("denom is not match with denom traces")
    

# check trace and return estimate denom
def validateTrace(trace) -> str | None:
  if trace["type"] == "op":
    baseDenom = trace["counterparty"]["base_denom"]
    bridgeId = int(trace["chain"]["bridge_id"])
    array = bytearray(bridgeId.to_bytes(8, byteorder='big'))
    array.extend(bytearray(baseDenom, 'utf-8'))
    sha3_256 = hashlib.sha3_256()
    sha3_256.update(array)
    hash = sha3_256.digest().hex()
    return 'l2/' + hash
  if trace["type"] == "ibc":
    # check counterparty
    baseDenom = trace["counterparty"]["base_denom"]
    path = trace["chain"]["path"]
    pathBefore = '/'.join(path.split('/')[2:])
    print(pathBefore, baseDenom)
    if getIBCDenom(pathBefore) != baseDenom:
      raise Exception("counterparty's base denom is not match with current path")
    return getIBCDenom(path)
  return None


def getIBCDenom(path: str) -> str :
  if len(path.split('transfer/')) == 1:
    return path

  sha256 = hashlib.sha256()
  sha256.update(bytes(path, 'utf-8'))
  hash = sha256.digest().hex().upper()
  return 'ibc/' + hash
