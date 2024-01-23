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
        interval: 500000, // Mine every 5 seconds (adjust as needed)
        chainId: 31337
      },
      accounts: [
      {
        privateKey: '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
        balance: '10000000000000000000000'
      }
    ]
    }
  },
};
