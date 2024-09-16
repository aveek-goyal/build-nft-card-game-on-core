require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");


const dotenv = require("dotenv");
dotenv.config();

function privateKey() {
  return process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [];
}

module.exports = {
  networks: {
    core_testnet: {
      url: "https://rpc.test.btcs.network", // Core testnet RPC URL
      chainId: 1115,
    },
  },
  solidity: {
    version: "0.8.24",
    settings: {
      evmVersion: 'paris',
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },  etherscan: {
    apiKey: {
      core_testnet: "0f1d28ea91444acf96a019864267a552", // Add your Core testnet explorer API key
    },
    customChains: [
      {
        network: "core_testnet",
        chainId: 1115,
        urls: {
          apiURL: "https://api.test.btcs.network/api", // Core testnet API URL
          browserURL: "https://scan.test.btcs.network", // Core testnet explorer URL
        },
      },
    ],
  },
};

