import { writeFileSync } from 'fs';
import { Block } from '../types';
import { readFileSync } from 'fs';
import { Wallets } from '../types';

export const writeBlockchain = (blockchain: Block[]) => {
  const blockchainString = JSON.stringify(blockchain, null, 2);
  writeFileSync('./blockchain/blockchain.json', blockchainString);
};

export const getWallets = (): Wallets => {
  const walletsFile = readFileSync('./blockchain/wallets.json');
  const wallets = JSON.parse(String(walletsFile));
  return wallets;
};

export const writeWallets = (wallets: Wallets): void => {
  const walletsString = JSON.stringify(wallets, null, 2);
  writeFileSync('./blockchain/wallets.json', walletsString);
};

