const hre = require("hardhat");

async function main() {
  const DAO = await hre.ethers.getContractFactory("DAO");
  const dao = await DAO.deploy()

  console.log(dao)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
