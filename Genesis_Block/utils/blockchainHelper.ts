import { writeFileSync } from "fs";
import { Block } from "../types";

export const writeBlockchain = (blockchain: Block[]) => {
    const blockchainString = JSON.stringify(blockchain, null, 2);
    writeFileSync('./blockchain/blockchain.json', blockchainString);
  };
