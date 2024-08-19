import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import * as dotenv from 'dotenv';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: '0.8.24',
  networks: {
    arkhiamain: {
      url: process.env.ARKHIA_MAINNET_RPC,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    hashiomain: {
      url: process.env.HASHIO_MAINNET_RPC,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
    arkhiatest: {
      url: process.env.ARKHIA_TESTNET_RPC,
      accounts: [`${process.env.PRIVATE_KEY}`],
    },
  },
};

export default config;
