import { expect } from "chai"
import { ethers } from "hardhat";

let signers;
let owner: any;
let alice: any;
let auction: any;
const emptyAddress = '0x0000000000000000000000000000000000000000';

describe("Auction", function () {
    beforeEach(async () => {
        signers = await ethers.getSigners();
        owner = signers[0];
        alice = signers[1];
        const Auction = await ethers.getContractFactory("Auction");
        auction = await Auction.deploy("public aution", "name of object", "description of object");
        await auction.deployed();
    });

    it("show object data", async () => {
        expect(String(auction.SeeObject())==("Object name: name of object. Object Description: description of object"));
    });
});