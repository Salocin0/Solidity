// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;
import "@openzeppelin/contracts/access/Ownable.sol";

contract Vote {
    
    Vote myVote;
    
    event emitVote(address client, string vote);
    event cancelVote(address client, string vote);
    event changeVote(address client, string vote);
    event delegateVote(address client, address delegate);

    struct Vote {
        string name;
        uint voters;
        mapping(address => string) votes;
        mapping(address => address) delegations;
        mapping(string => uint) results;
    }

    constructor(string memory _name, uint memory _voters) {
        transferOwnership(payable(msg.sender));
        myVote.name = _name;
        address[_voters] AVoters;
    }

    //Votar
    function Deposit(uint amount) external payable {
        client[msg.sender] = amount;
        totalDeposit += amount;
        emit LogDeposit(msg.sender, amount, porcentDeposit);
    }
    //cambiar voto
    //delegar voto
    //cancelar voto
    //agregar opcion votacion
    //ver resultados
    //añadir votantes
}