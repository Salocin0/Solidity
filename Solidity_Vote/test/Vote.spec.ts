import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BigNumber } from "ethers";
import { isAddress } from "ethers/lib/utils";
import { ethers } from "hardhat";
import { boolean, string } from "hardhat/internal/core/params/argumentTypes";
import { getSystemErrorMap } from "util";
import { Vote } from "../typechain";

describe("Vote Contract", function () {
    let Vote;
    let vote: Vote;
    let owner: SignerWithAddress;
    let addr1: SignerWithAddress;
    let addr2: SignerWithAddress;
    let addr3: SignerWithAddress;
    let addrs: SignerWithAddress[];

    beforeEach(async () => {
        Vote = await ethers.getContractFactory("Vote");
        [owner, addr1, addr2, addr3, ...addrs] = await ethers.getSigners();
        vote = (await Vote.deploy("VotacionPrueba",["a","b"])) as Vote;
    });

    it('should be deployed', () => {
        expect(vote).to.be.not.null;
    })
    
    it('vote with a address in whitelist', ()=> {
        vote.addWhiteList([addr1.address]);
        addr1.connect
        expect(vote.setVote("b"));
    })

    it('vote for a candidate that does not exist', ()=> {
        addr1.connect
        expect(vote.setVote("c")).to.be.reverted;
    })
    
    it('vote without a address in whitelist', ()=> {
        addr2.connect
        expect(vote.setVote("a")).to.be.reverted;
    })

    it('see state of votation if this is open', ()=> {
        //to-do
    })

    it('see state of votation if this is close', ()=> {
        //to-do
    })

    it('address in whitelist change vote', ()=> {
        //to-do
    })

    it('address out whitelist change vote', ()=> {
        //to-do
    })

    it('address in whitelist change vote with other option out candidates', ()=> {
        //to-do
    })

    it('address out whitelist change vote with other option out candidate', ()=> {
        //to-do
    })

    it('address in whitelist cancel vote', ()=> {
        //to-do
    })

    it('address out whitelist cancel vote', ()=> {
        //to-do
    })

    it('owner add candidate', ()=> {
        //to-do
    })
    
    it('not owner add candidate', ()=> {
        //to-do
    })

    it('owner close votation', ()=> {
        //to-do
    })
    
    it('not owner close votation', ()=> {
        //to-do
    })

    it('try vote when vote is close', ()=> {
        //to-do
    })
    
});