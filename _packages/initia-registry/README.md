# initia-registry

The npm package for the [initia registry](https://github.com/initia-labs/initia-registry)

```
npm install @initia/initia-registry
```

## usage

Fetch data from initia-registry:

```typescript
import { assets, chains, ibc } from "@intiia/initia-registry";
import { Chain } from "@initia/initia-registry-types";

const assetList: Chain = assets.find(
  ({ chain_name }) => chain_name === "initia"
);
```
