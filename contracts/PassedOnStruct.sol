import "AccessibleStruct.sol";

contract PassedOnStruct {
	AccessibleStruct accessibleStruct;

	function PassedOnStruct() {
		accessibleStruct = new AccessibleStruct();
	}

	function getStruct(uint key)
		returns (uint fixedLength, uint fixedLength2) {
		return accessibleStruct.variableLengths(key);		
	}
}