// SPDX-License-Identifier: MIT
// contracts/DrawContract.sol
pragma solidity ^0.8.18;

contract OpenChat {
    mapping(address => uint256) public messages;
    event MessageSent(address indexed sender, uint256 amount);

    function message() external {
        messages[msg.sender] += 1;
        emit MessageSent(msg.sender, messages[msg.sender]);
    }

    function getMessages(address user) external view returns (uint256) {
        return messages[user];
    }
}