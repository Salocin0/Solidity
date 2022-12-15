// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/Ownable.sol";
contract TPWallet is Ownable{

    uint256 balance;

    event LogWithdrawTo(address Wallet);

    function deposit() payable external onlyOwner {
        balance=msg.value;
    }

    function withdrawAll() external onlyOwner{
        payable(msg.sender).transfer(balance);
        balance=0;
    }

    function withdraw(uint256 _balance) external onlyOwner{
        require(_balance<=balance,"saldo insuficiente");
        payable(msg.sender).transfer(_balance);
        balance=balance-_balance;
    }

    function withdrawTo(address _wallet, uint256 _balance) external onlyOwner{
        require(_balance<=balance,"saldo insuficiente");
        payable(_wallet).transfer(_balance);
        emit LogWithdrawTo(_wallet);
        balance=balance-_balance;
    }
    
    function viewBalance() external view returns(uint256) {
        return balance;
    }
}
