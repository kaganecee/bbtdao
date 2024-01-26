const { ethers } = require("hardhat");

async function fundAccount() {
  const [sender] = await ethers.getSigners();
  const receiverAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"; // Replace with your account address

  const tx = await sender.sendTransaction({
    to: receiverAddress,
    value: ethers.utils.parseEther("1000000"), // Sending 100 ETH
  });

  await tx.wait();
  console.log(`Funded account ${receiverAddress} with 100 ETH`);
}

fundAccount();