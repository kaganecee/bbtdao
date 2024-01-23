const hre = require("hardhat");

async function main() {
  // const lockedAmount = hre.ethers.parseEther("0.001");

  // // Deploy DAO contract without constructor arguments
  // const daoContract = await hre.ethers.deployContract("DAO", {
  //   value: lockedAmount,
  // });

  // await daoContract.waitForDeployment();

  const DAO = await hre.ethers.getContractFactory("DAO");
  const dao = await DAO.deploy()

  console.log(dao)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
