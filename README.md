<div align="center">

<img width="745" alt="Screenshot 2024-01-26 at 09 14 52" src="https://github.com/kaganecee/bbtdao/assets/56219023/d5b5a6dc-7324-41d8-ac91-06b2f0982cfd">

  <p align="center">
    Blockchain Project for Decentralized University Clubs
  </p>
</div>

## About The Project

The project is a web3 decentralized application (dApp) designed for streamlined university club management. Leveraging Ethereum blockchain, Solidity smart contracts, React frontend, and MetaMask integration, the dApp enhances transparency, governance, and user experience. The project is open-source on GitHub, prioritizing community collaboration, regular updates, and future enhancements.

### Problem definition:
Removing limitations and centralization in traditional management systems.

### Necessity:
Suitable for changing world conditions; to create a flexible, transparent and democratic management structure.

### Model

![MODEL](https://github.com/kaganecee/bbtdao/assets/56219023/a792f1b7-0670-4d00-8a3f-1e3cd89d2d8e)

## Built With

- React.js
- Metamask
- Solidity
- Web3
- Hardhat

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/kaganecee/bbtdao
   ```
2. Install NPM packages to root folder and client folder
   ```sh
   npm install
   ```
3. Run the app in the client folder

   ```sh
    npm run dev
   ```

4. For contract deployment, run the following commands in the root folder
   ```sh
   npx hardhat compile
   npx hardhat node
   npx hardhat scripts/deploy.js --network location
   ```

### Usage

1. Create a new account in Metamask.
2. Add Metamask extension to your browser.
3. Run the app in the client folder
   ```sh
   npm run dev
   ```
4. Connect Metamask to the project.
5. You can now use the app.

### Troubleshotting

Error: Transaction reverted: function elector wasn't recognized.
Solution: You must reset the metamask account's data.

Error: Parameter decodign error: Returned values aren't valid, did it run out of Gas?
Solution: Probably contract adress must be update.
You can run ```npx hardhat scripts/deploy.js --network location``` this command and take correct address and paste it to client/src/helpers/constants/index.js
