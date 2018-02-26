pragma solidity ^0.4.15;

contract AccessibleStruct {
    struct DifferentLength {
        uint fixedLength;
        uint[] variableLength;
        uint fixedLength2;
    }

    mapping(uint => DifferentLength) public variableLengths;

    function AccessibleStruct() public {
        variableLengths[0].fixedLength = 1;
        variableLengths[0].variableLength.push(2);
        variableLengths[0].variableLength.push(3);
        variableLengths[0].fixedLength2 = 4;
    }

    function getVariableLengthAt(uint index, uint innerIndex)
        constant public
        returns (uint) {
        return variableLengths[index].variableLength[innerIndex];
    }
}