pragma solidity ^0.4.5;

contract TakeArrays {
    address[] public addresses;

    function takeAddresses(address[] _addresses)
        public
        returns (bool success) {
        addresses = _addresses;
        return true;
    }
}