// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";

contract SAM is ERC20, Initializable {
    constructor() ERC20("SAM", "SAM") {}

    function initialize() public initializer {
        _mint(msg.sender, 100000000000000000000000000);
    }
}
