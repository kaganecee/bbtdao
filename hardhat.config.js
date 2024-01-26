require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  paths: {
    artifacts: './artifacts',
  },
  networks: {
    hardhat: {
      mining: {
        auto: true, // Auto mine transactions
        interval: 20000, // Mine every 5 seconds (adjust as needed)
        chainId: 31337
      }
    }
  },
};