// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Lock {
    address payable public owner;

    constructor() payable {        
        owner = payable(msg.sender);
    }

    function withdraw() public {
        owner.transfer(address(this).balance);
    }

    function getChainId() public view returns (uint) {
        console.log("chain id is %o", block.chainid);
        return block.chainid;
    }
}
