import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { TPWallet } from "../typechain-types/contracts/TPWallet";


describe("TPWallet Contract", function () {
    let TPWallet;
    let tpwallet: TPWallet;
    let owner: SignerWithAddress;
    let addr1: SignerWithAddress;

    beforeEach(async () => {
        TPWallet = await ethers.getContractFactory("TPWallet");
        [owner, addr1] = await ethers.getSigners();
        tpwallet = (await TPWallet.deploy()) as TPWallet;
    });

    it('should be deployed', () => {
        expect(tpwallet).to.be.not.null;
    })
    
    it('owner deposit',()=>{
        owner.connect;
        let _balance=tpwallet.viewBalance();
        tpwallet.deposit({ value: ethers.utils.parseUnits('500','wei') });
        expect(tpwallet.viewBalance()>_balance);
    })
    
    it('other address deposit',()=>{
        addr1.connect;
        let _balance=tpwallet.viewBalance();
        tpwallet.deposit({ value: ethers.utils.parseUnits('500','wei') });
        expect(tpwallet.viewBalance()==_balance);
    })

    it('withdrawAll owner',()=>{
        owner.connect;
        let _balance=tpwallet.viewBalance();
        tpwallet.deposit({ value: ethers.utils.parseUnits('500','wei') });
        tpwallet.withdrawAll();
        expect((tpwallet.viewBalance()<_balance)&&(Number(tpwallet.viewBalance())==0));
    })

    it('withdrawAll other address',()=>{
        tpwallet.deposit({ value: ethers.utils.parseUnits('500','wei') });
        addr1.connect;
        let _balance=tpwallet.viewBalance();
        tpwallet.withdrawAll();
        expect(tpwallet.viewBalance()==_balance);
    })

    it('withdraw owner',()=>{
        owner.connect;
        tpwallet.deposit({ value: ethers.utils.parseUnits('500','wei') });
        let _balance=tpwallet.viewBalance();
        tpwallet.withdraw(500);
        expect((tpwallet.viewBalance()<_balance));
    })

    it('withdraw other address',()=>{
        tpwallet.deposit({ value: ethers.utils.parseUnits('500','wei') });
        addr1.connect;
        let _balance=tpwallet.viewBalance();
        tpwallet.withdraw(500);
        expect((tpwallet.viewBalance()==_balance));
    })

    it('owner withdraw To other address',()=>{
        owner.connect;
        tpwallet.deposit({ value: ethers.utils.parseUnits('5000','wei') });
        let _balance=tpwallet.viewBalance();
        tpwallet.withdrawTo(addr1.getAddress(),500)
        expect((tpwallet.viewBalance()<_balance));
    })

    it('other address withdraw To owner',()=>{
        addr1.connect;
        tpwallet.deposit({ value: ethers.utils.parseUnits('5000','wei') });
        let _balance=tpwallet.viewBalance();
        tpwallet.withdrawTo(owner.getAddress(),500)
        expect((tpwallet.viewBalance()==_balance));
    })
});