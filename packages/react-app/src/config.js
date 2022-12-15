import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x0272dce9D1fcAD4b743d048314B67b2206b30D15";
export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/Zgd8_oJ5MhIO4U2kglPKFNsjcwX64NzE",
  },
};