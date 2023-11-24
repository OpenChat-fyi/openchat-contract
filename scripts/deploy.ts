// npx hardhat run scripts/deploy.ts --network sepolia
import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Contract owner:", deployer.address);

  const contract = await ethers.deployContract("OpenChat");

  console.log("Contract address:", await contract.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});