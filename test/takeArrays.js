var TakeArrays = artifacts.require("./TakeArrays.sol");

contract('TakeArrays', function(accounts) {

    it("should take in an array of addresses", function() {
        var takeArrays;

        return TakeArrays.deployed()
            .then(instance => {
                takeArrays = instance;
                return takeArrays.takeAddresses.call(accounts, { from: accounts[0] });
            })
            .then(function (success) {
                assert.isTrue(success, "should be able to take an array");
                return takeArrays.takeAddresses(accounts, { from: accounts[0] })
            })
            .then(function (txInfo) {
                return takeArrays.addresses(accounts.length - 1);
            })
            .then(function (address0) {
                assert.equal(address0, accounts[accounts.length - 1], "should have taken in the last address");
            });

    });

});
