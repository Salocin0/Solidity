import { expect } from "chai"
import { ethers } from "hardhat";

let signers;
let owner: any;
let alice: any;
let adoption: any;
const emptyAddress = '0x0000000000000000000000000000000000000000';

describe("Bank", function () {
    beforeEach(async () => {
        signers = await ethers.getSigners();
        owner = signers[0];
        alice = signers[1];
        const Adoption = await ethers.getContractFactory("Adoption");
        adoption = await Adoption.deploy();
        await adoption.deployed();
    });
    //it('should not getAdopterOf if id is not between 0 and 15', async () => {
    //    expect(adoption.connect(alice).getAdopterOf(16)).to.be.reverted;
    //})
});