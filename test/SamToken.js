const { ethers } = require("hardhat");

async function main() {
  const SamToken = await ethers.getContractFactory("SamToken");
  const samToken = await SamToken.deploy(1000000000);

  console.log("SamToken deployed to:", samToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
