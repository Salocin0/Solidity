import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { boolean, string } from "hardhat/internal/core/params/argumentTypes";
import { getSystemErrorMap } from "util";
import { DefaultEventTickets } from "../typechain";

describe("DefaultEventTickets Contract", function () {
    let DefaultEventTickets;
    let defaultEventTickets: DefaultEventTickets;
    let owner: SignerWithAddress;
    let addr1: SignerWithAddress;
    let addr2: SignerWithAddress;
    let addr3: SignerWithAddress;
    let addrs: SignerWithAddress[];

    beforeEach(async () => {
        DefaultEventTickets = await ethers.getContractFactory("DefaultEventTickets");
        [owner, addr1, addr2, addr3, ...addrs] = await ethers.getSigners();
        defaultEventTickets = (await DefaultEventTickets.deploy("Description","URL", 100)) as DefaultEventTickets;
    });

    it('should be deployed', () => {
        expect(defaultEventTickets).to.be.not.null;
    })

    it('owner set new ticket price', ()=> {
        defaultEventTickets.newTicketPrice(150);
        expect(defaultEventTickets.ticketPriceView()+""=="150");
    })
    
    it('new price set by someone other than the owner', ()=> {
        addr1.connect;
        expect(defaultEventTickets.newTicketPrice(150)).to.be.reverted;
    })

    it('quantity of tickets for address',()=>{
        owner.connect;
        defaultEventTickets.buyTickets(10);
        expect(defaultEventTickets.getBuyerTicketCount(owner.getAddress.toString())+""==10+"");
    })

    it('buy tickets with event closed',()=>{
        defaultEventTickets.endSale;
        defaultEventTickets.buyTickets(10);
        expect(defaultEventTickets.buyTickets(10)).to.be.reverted;
    })

    it('buy tickets without stock',()=>{
        defaultEventTickets.newTicketPrice(1);
        defaultEventTickets.buyTickets(100);
        expect(defaultEventTickets.buyTickets(1)).to.be.reverted;
    })
    
    it('refund tickets',()=>{
        addr2.connect;
        defaultEventTickets.buyTickets(10);
        defaultEventTickets.getRefund(5);
        expect(defaultEventTickets.getBuyerTicketCount(addr2.getAddress.toString())+""==5+"");
    })

    it('refund more tickets than purchased',()=>{
        addr2.connect;
        defaultEventTickets.buyTickets(10);
        expect(defaultEventTickets.getRefund(15)).to.be.reverted;
    })

    it('someone end sales',()=>{
        addr3.connect;
        defaultEventTickets.buyTickets(10);
        expect(defaultEventTickets.endSale()).to.be.reverted
    })

    it('owner end sales',()=>{
        addr1.connect;
        defaultEventTickets.buyTickets(10);
        owner.connect;
        const old_balance = owner.getBalance;
        defaultEventTickets.endSale;
        const new_balance = owner.getBalance;
        expect(new_balance>=old_balance);
    })

});