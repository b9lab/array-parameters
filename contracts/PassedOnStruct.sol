pragma solidity ^0.4.15;

import "./AccessibleStruct.sol";

contract PassedOnStruct {
    AccessibleStruct accessibleStruct;

    function PassedOnStruct() public {
        accessibleStruct = new AccessibleStruct();
    }

    function getStruct(uint key)
        constant public
        returns (uint fixedLength, uint fixedLength2) {
        return accessibleStruct.variableLengths(key);       
    }
}