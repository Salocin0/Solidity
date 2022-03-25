// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;
import "@openzeppelin/contracts/access/Ownable.sol";

contract Auction {
    
    Auction myAuction;
    
    event seeObject(string name, string description);
    event seeHighestBid(address bidder, uint amount);
    event seeTopbids(address[20] bidders, uint[20] amount);
    event makebid(address client, uint amount);

    struct Auction {
        string name;
        string objectName;
        string objectDescription;
        mapping(address => uint) bidders;
    }

    constructor(string memory _nameAuction, string memory _nameObject, string memory _descriptionObject) {
        transferOwnership(payable(msg.sender));
        myAuction.name = _nameAuction;
        myAuction.objectName = _nameObject;
        myAuction.objectDescription = _descriptionObject;
    }

    function SeeObject() external view returns(string) {
        emit seeObject();
        return "Object name: " + myAuction.objectName + ". Object Description: " + myAuction.objectDescription;
    }
    
    //ver el objeto
    //ver la puja mayor
    //ver las 20 mayores pujas
    //pujar

}



