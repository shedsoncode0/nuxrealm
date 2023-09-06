// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;
import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetMinterPauser.sol";

contract NuxrealmToken is ERC20PresetMinterPauser {
    constructor() ERC20PresetMinterPauser ("Nuxrealm", "NUX") {
        _mint( msg.sender, 1_000_000 * 10**18 );
    }
}