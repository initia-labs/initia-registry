import { IBCInfo } from '@initia/initia-registry-types';
const info: IBCInfo[] = [
  {
    "$schema": "../../ibc_data.schema.json",
    "chain_1": {
      "chain_name": "initia",
      "client_id": "07-tendermint-1",
      "connection_id": "connection-1"
    },
    "chain_2": {
      "chain_name": "miniwasm",
      "client_id": "07-tendermint-0",
      "connection_id": "connection-0"
    },
    "channels": [
      {
        "chain_1": {
          "channel_id": "channel-1",
          "port_id": "transfer"
        },
        "chain_2": {
          "channel_id": "channel-0",
          "port_id": "transfer"
        },
        "ordering": "unordered",
        "version": "ics20-1",
        "tags": {
          "status": "live",
          "preferred": true
        }
      }
    ]
  }
];
export default info;