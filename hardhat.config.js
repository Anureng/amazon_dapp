require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({ path: '.env' });
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  defaultNetwork: 'goerli',
  networks: {
    hardhat: {},
    goerli: {
      url: process.env.ALCHEMY_KEY,
      accounts: [process.env.SECRET_KEY]
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};

// 0x805CF6449Ea9497a640d4119898FDa03624563fd

