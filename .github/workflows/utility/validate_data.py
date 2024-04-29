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

