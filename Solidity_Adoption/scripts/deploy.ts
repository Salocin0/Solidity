import { ethers } from "hardhat";

async function main() {
    const Adoption = await ethers.getContractFactory("Adoption")
    const contract = await Adoption.deploy()
    console.log("Contract deployed to address:", contract.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
    process.exit(1)
})
