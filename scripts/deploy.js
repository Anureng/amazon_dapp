
const hre = require("hardhat");

async function main() {
  const Dappazon = await hre.ethers.getContractFactory("Dappazon");
  const dappazon = await Dappazon.deploy();

  await dappazon.deployed();

  console.log(
    `Lock with 1 ETH and deployed to ${dappazon.address}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
