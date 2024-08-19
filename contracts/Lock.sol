// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Lock {
    address payable public owner;

    constructor() payable {        
        owner = payable(msg.sender);
    }

    function withdraw() public {
        owner.transfer(address(this).balance);
    }

    function getChainId() public view returns (uint) {
        return block.chainid;
    }

    function getChainIdPlusOne() public view returns (uint) {
        return block.chainid + 1;
    }

        function getGreetingWithChainId() public view returns (string memory) {
        return string(abi.encodePacked("hello, my chain id is ", uint2str(block.chainid)));
    }

    // Helper function to convert uint to string
    function uint2str(uint _i) internal pure returns (string memory) {
        if (_i == 0) {
            return "0";
        }
        uint j = _i;
        uint len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint k = len;
        while (_i != 0) {
            k = k - 1;
            uint8 temp = (48 + uint8(_i - _i / 10 * 10));
            bstr[k] = bytes1(temp);
            _i /= 10;
        }
        return string(bstr);
    }
}
