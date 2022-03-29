import { ethers } from "hardhat";

async function main() {
    const defaultEventTickets = await ethers.getContractFactory("DefaultEventTickets");
    const contract = await defaultEventTickets.deploy('A test description', 'https://testevent.com', 100);
    console.log("Contract deployed to address:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })