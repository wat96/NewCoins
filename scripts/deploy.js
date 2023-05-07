// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat")
const { ethers } = hre

async function main() {
      let provider = ethers.getDefaultProvider()
      let [ deployer ] = await hre.ethers.getSigners()

      console.log("Deploying contracts with the account:", deployer.address)
      console.log("Account balance:", (await deployer.getBalance()).toString())


      // get contract factor and deploy
      let nftContractFact = await hre.ethers.getContractFactory("MyNFT")
      let nftContract = await nftContractFact.deploy()
      await nftContract.deployed()
      console.log("deployed contract address:", nftContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
