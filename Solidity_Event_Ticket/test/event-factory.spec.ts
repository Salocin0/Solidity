import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { EventFactory } from "../typechain/EventFactory";
import { DefaultEventTickets } from "../typechain/DefaultEventTickets";
import { EventTickets } from "../typechain";

describe("EventFactory Contract", function () {
    let EventFactory;
    let eventFactory: EventFactory;
    let EventTickets;
    let defaultEventTickets: DefaultEventTickets;
    let owner: SignerWithAddress;
    let addr1: SignerWithAddress;
    let addr2: SignerWithAddress;
    let addrs: SignerWithAddress[];

    beforeEach(async () => {
        EventFactory = await ethers.getContractFactory("EventFactory");
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        eventFactory = (await EventFactory.deploy()) as EventFactory;

        EventTickets = await ethers.getContractFactory("DefaultEventTickets");
        defaultEventTickets = (await EventTickets.deploy("Description", "URL", 100)) as DefaultEventTickets;

    });

    it('should be deployed', () => {
        expect(eventFactory).to.be.not.null;
    })
    
    it('create event',()=>{
        addr1.connect;
        const old_quantity = eventFactory.quantity;
        eventFactory.createEvent("Description","URL",100);
        const new_quantity = eventFactory.quantity;
        expect(new_quantity>old_quantity);
    })

    it('add event',()=>{
        addr1.connect;
        const old_quantity = eventFactory.quantity;
        eventFactory.addEvent(defaultEventTickets.address);
        const new_quantity = eventFactory.quantity;
        expect(new_quantity>old_quantity);
    })

});
