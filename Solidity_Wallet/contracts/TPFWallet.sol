//TP final:
//Implementar el contrato wallet que hicimos en clases usando para la verificación del ownership la librería de open zeppelin.
//Subir el código a un repositorio publico de github.
//Nice to have: usar hardhat o truffle.
//Link de la documentación de open zeppelin: https://docs.openzeppelin.com/contracts/4.x/

pragma solidity ^0.8.0;

contract Wallet{
    
    mapping(address=>uint256) balance;

    event LogWithdrawTo(address Wallet);

    function deposit() payable external {
        balance[msg.sender]=msg.value;
    }

    function withdrawAll() external{
        payable(msg.sender).transfer(balance[msg.sender]);
        balance[msg.sender]=0;
    }

    function withdraw(uint256 _balance) external{
        require(_balance<=balance[msg.sender],"saldo insuficiente");
        payable(msg.sender).transfer(_balance);
        balance[msg.sender]=balance[msg.sender]-_balance;
    }

    function withdrawTo(address _wallet, uint256 _balance) external{
        require(_balance<=balance[msg.sender],"saldo insuficiente");
        payable(_wallet).transfer(_balance);
        emit LogWithdrawTo(_wallet);
        balance[msg.sender]=balance[msg.sender]-_balance;
    }
    
    function viewBalance() external view returns(uint256){
        return balance[msg.sender];
    }
}