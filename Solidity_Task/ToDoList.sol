// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "./TaskStatus.sol";
import "./Task.sol";

contract ToDoList{

    uint256 TASK_PRICE = 100 wei;

    mapping(address=>Task[]) tasks;

    address public owner;

    constructor(){
        owner = msg.sender;
    }

    modifier onlyOwner(){
        require(msg.sender==owner, "nop");
        _;
        //owner = address(0x0);
    }

    function task(uint _index) public view returns(Task memory){
        return tasks[msg.sender][_index];
    }

    function create(string memory _text) payable public {
        require(msg.value>=TASK_PRICE, "no te alcanza...");
        tasks[msg.sender].push(Task(_text, TaskStatus.ToDo));
        if (msg.value>TASK_PRICE) {
            payable(msg.sender).transfer(msg.value-TASK_PRICE);
        }
    }

    function updatePrice(uint256 _price) public onlyOwner {
        TASK_PRICE = _price;
    }

    function update(uint _index, string memory _text) public{
        Task storage task = tasks[msg.sender][_index];
        task.text = _text;
    }

    function toComplete(uint _index) public {
        _updateStatus(_index, TaskStatus.Done);
    }

    function toToDo(uint _index) public {
        _updateStatus(_index, TaskStatus.ToDo);
    }

    function toDoing(uint _index) public {
        _updateStatus(_index, TaskStatus.Doing);
    }

    function _updateStatus(uint _index, TaskStatus _status) internal{
        tasks[msg.sender][_index].status = _status;
    }

    function withdraw() public onlyOwner{
        payable(owner).transfer(address(this).balance);
    }
}