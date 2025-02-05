// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

contract Staking {
    uint256 public totalStaked;
    mapping(address=>uint) balances;


    function stake(uint value) public payable{
        require(value>0,"Amount sent should be greater than 0");
        require(value==msg.value,"Amount sent should be equal to the value called in the function");
        totalStaked += value;
        balances[msg.sender] += value;
    }

    function unstake(uint value)public{
        require(value<=balances[msg.sender],"The value u have staked is lesser than the amount given");
        totalStaked-=value;
        balances[msg.sender] -= value; 
        payable(msg.sender).transfer(value);
    }


}
