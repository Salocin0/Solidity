// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;
import "@openzeppelin/contracts/access/Ownable.sol";
//import "github.com/oraclize/ethereum-api/oraclizeAPI.sol";

contract Bank {
    Bank myBank;
    
    event LogDeposit(address client, uint256 amount, uint256 porcentDeposit);
    event LogLending(address client, uint256 amount, uint256 porcentLending);
    event LogWithdraw(address owner, uint256 balance);

    struct Bank {
        string name;
        uint256 totalDeposit;
        uint256 porcentDeposit;
        uint256 porcentLending;
        uint256 historyLending;
        uint256 totalLending;
        mapping(address => uint256) client;
    }

    constructor(string memory _name, uint256 memory _porcentDeposit, uint256 memory _porcentLending) {
        transferOwnership(payable(msg.sender));
        myBank.name = _name;
        myBank.porcentDeposit = _porcentDeposit;
        myBank.porcentLending = _porcentLending;
    }

    //depositar
    function Deposit(uint amount) external payable {
        client[msg.sender] = amount;
        totalDeposit += amount;
        emit LogDeposit(msg.sender, amount, porcentDeposit);
    }

    //retirar
    function Withdraw(uint amount) external  {
        requiere(client[msg.sender]>amount);
        client[msg.sender] -= amount;
        totalDeposit -= amount;
        payable(msg.sender).transfer(amount);
        emit LogWithdraw(msg.sender, amount); 
    }

    //pedir prestado
    function Lending(uint amount) external {
        requiere(client[msg.sender]*1.5>amount);
        client[msg.sender] = amount;
        emit LogLending(msg.sender, amount, porcentLending);
        blockNumber = block.number;
    }
    
    //pagar interes por deposito
    
    //verificar colateral
        //
        //function ETHprice() {
        //    update();
        //}
        //function update() payable{
        //    newOraclizeQuery("Oraclize query was sent, standing by for the answer..");
        //    oraclize_query("URL", "json(https://api.coinmarketcap.com/v1/ticker/ethereum/).0.price_usd");
        //} 
    //liquidar colateral si llega al 95%
        //function PayLending() {
        //    for (uint;i<blockNumber; i++) {
        //    if()    
        //    }
        //}
    //crear deposito fijo

    //cancelar deposito fijo

    //finalizar deposito fijo

    //cambiar porcentaje deposito fijo

    //cambiar porcentaje deposito flexible

    //cambiar porcentaje prestamo
}
