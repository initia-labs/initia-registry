import json
import os
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
            else:
              raise Exception("'assets' array doesn't contain any tokens")
          else:
            raise Exception("assetlist schema doesn't contain 'assets' array")
          if "fees" in chainSchema:
            if "fee_tokens" in chainSchema["fees"]:
              if chainSchema["fees"]["fee_tokens"]:
                for token in chainSchema["fees"]["fee_tokens"]:
                  if "denom" in token:
                    if token["denom"] not in bases:
                      raise Exception(token["denom"] + " is not in bases")
              else:
                raise Exception("'fee_tokens' array doesn't contain any tokens")
          if "staking" in chainSchema:
            if "staking_tokens" in chainSchema["staking"]:
              if chainSchema["staking"]["staking_tokens"]:
                for token in chainSchema["staking"]["staking_tokens"]:
                  if "denom" in token:
                    if token["denom"] not in bases:
                      raise Exception(token["denom"] + " is not in bases")
                  else:
                    raise Exception("token doesn't contain 'denom' string")
            else:
              raise Exception("'fees' object doesn't contain 'staking_tokens' array")
          else:
            print("[OPTIONAL - Keplr Compliance] chain schema doesn't contain 'staking' object")
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

