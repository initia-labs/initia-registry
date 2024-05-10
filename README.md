# Initia Registry

The Initia Registry serves as a central repository containing crucial metadata for chains within the Initia ecosystem. 

It houses configuration files such as ```chain.json``` and ```assetlist.json```, which are vital for initiating and interacting with nodes, as well as understanding the available assets on each chain. Additionally, the registry includes ```*.schema.json``` files in the root directory, outlining the recommended metadata structure. These schemas are dynamic, subject to revisions based on evolving user needs, and may include optional fields beyond the current schema specifications.

## Adding Minitia to Initia Registry

1. **Fork the Repository**: Begin by forking the repository where the Initia Registry is hosted.
2. **Add a New Directory**: Create a directory named after the chain you intend to add.
3. **Include Necessary Files**:
- ```chain.json```: Populate this file with the metadata of the chain.
- ```assetlist.json```: Include metadata concerning the assets available on the chain.
- ```initia-minitia.json```: Provide metadata about the IBC connections and channels, ensuring the file name adheres to the alphabetical order of the chain names, e.g., Achain-Bchain.json.
4. **Create a Pull Request**: Submit your modifications for review to merge them into the main repository.
