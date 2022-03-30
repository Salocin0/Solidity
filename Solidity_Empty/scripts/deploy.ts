import { ethers } from "hardhat";

async function main() {
    const Auction = await ethers.getContractFactory("Auction")
    const contract = await Auction.deploy()
    console.log("Contract deployed to address:", contract.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
    process.exit(1)
})
