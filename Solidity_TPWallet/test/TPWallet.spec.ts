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
    
    it('depositar como owner, tienen q andar',()=>{
        addr1.connect;
        expect(1>0);
    })
    
    it('depositar como no owner, no tienen q andar',()=>{

    })

    it('retirar todo como owner, tienen q andar',()=>{

    })

    it('retirar todo como no owner, no tienen q andar',()=>{

    })

    it('retirar como owner, tienen q andar',()=>{

    })

    it('retirar como no owner, no tienen q andar',()=>{

    })

    it('retirar a una direccion como owner, tienen q andar',()=>{

    })

    it('retirar a una direccion como owner, no tienen q andar',()=>{
;
    })

    it('ver balance como owner, tienen q andar',()=>{

    })

    it('ver balance como no owner, tienen q andar',()=>{

    })
});