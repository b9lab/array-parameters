contract TakeArrays {
	address[] public addresses;

	function takeAddresses(address[] _addresses) 
		returns (bool success) {
		addresses = _addresses;
		return true;
	}
}