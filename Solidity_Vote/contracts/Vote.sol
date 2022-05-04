// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";

contract Vote is Ownable {
    Vote_Struct myVote;
    //estructura
    struct Vote_Struct {
        string name;
        string[] candidates;
        address[] whitelist;
        bool openVote;
        uint totalVotes;
        mapping(address => string) votes;
        mapping(string => uint) results;
    }
    //eventos
    event emitVote(address client, string vote);
    event EcancelVote(address client, string vote);
    event EchangeVote(address client, string vote);
    event outWhiteList(string text);
    event candidateDoNotExcist(string text);
    event stateVotation(string text);
    //constructor
    constructor(string memory _name, string[] memory _candidates) {
        transferOwnership(payable(msg.sender));
        myVote.name = _name;
        myVote.candidates = _candidates;
        myVote.openVote = true;
    }
    //agregar whitelist
    function addWhiteList(address[] memory _whitelist) external onlyOwner {
        myVote.whitelist = _whitelist;
        myVote.openVote = false;
    }
    //cerrar Votacion
    function closeVote() external onlyOwner{
        require(myVote.openVote=true);
        myVote.openVote=false;
    }
    //Votar
    function setVote(string memory _candidate) public {
        require(myVote.openVote=true);
        require(bytes(myVote.votes[payable(msg.sender)]).length==0);
        //hacer for comparando la dirreccion que desea votar con las de la whitelist
        for (uint i = 0; i < myVote.whitelist.length; i++) {
            if (myVote.whitelist[i]==payable(msg.sender)) {
                for (uint j = 0; j< myVote.candidates.length; j++){
                    if(keccak256(bytes(myVote.candidates[j])) == keccak256(bytes(_candidate))){
                        //si esta, escribir candidato en el mapeo de votos
                        myVote.votes[payable(msg.sender)] = string(_candidate);
                        myVote.results[string(_candidate)]+=1;
                        myVote.totalVotes+=1;
                        emit emitVote(payable(msg.sender), _candidate);
                    }else{
                        //si no existe, emitir salida
                        emit candidateDoNotExcist("candidate do not excist");
                    }
                }
            }else{
                //si no devolver mensaje negando el voto porque no pertenece a la whitelist
                emit outWhiteList("out white list");
            }
        }  
    }
    //ver estado
    function stateVote() public view returns (bool, uint, string memory){
        //emit stateVotation(string(abi.encodePacked("votation open: ", myVote.openVote, " numbers of votes: ", myVote.totalVotes)));
        return (myVote.openVote, myVote.totalVotes, seeResult());
    }
    //ver resultados
    function seeResult() public view returns (string memory){
        string memory result;
        for(uint i; i< myVote.candidates.length; i++){
            result = string(abi.encodePacked(result,myVote.candidates[i],myVote.results[myVote.candidates[i]]));
        }
        return result;
    }
    //cambiar voto
    function changeVote(string memory newvote) public {
        require(bytes(myVote.votes[payable(msg.sender)]).length>0);
        myVote.results[string(myVote.votes[payable(msg.sender)])]-=1;
        myVote.votes[payable(msg.sender)] = string(newvote);
        myVote.results[string(newvote)]+=1;
        emit EchangeVote(payable(msg.sender), newvote);
    }
    //cancelar voto
    function cancelVote() public {
        require(bytes(myVote.votes[payable(msg.sender)]).length>0);
        myVote.results[string(myVote.votes[payable(msg.sender)])]-=1;
        emit EcancelVote(payable(msg.sender), myVote.votes[payable(msg.sender)]);
        myVote.votes[payable(msg.sender)] = string("");
    }
    //agregar opcion votacion
    function addCandidate(string memory newCandidate) public onlyOwner{
        myVote.candidates.push(newCandidate);
    }

}