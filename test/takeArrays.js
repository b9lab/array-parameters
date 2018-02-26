const TakeArrays = artifacts.require("./TakeArrays.sol");

contract('TakeArrays', accounts => {

    let takeArrays;

    beforeEach("should deploy a new instance", function() {
        return TakeArrays.new({ from: accounts[0] })
            .then(created  => takeArrays = created);
    });

    it("should take in an array of addresses", function() {
        this.slow(1500);
        return takeArrays.takeAddresses.call(accounts, { from: accounts[0] })
            .then(success => assert.isTrue(success, "should be able to take an array"))
            .then(() => takeArrays.takeAddresses(accounts, { from: accounts[0] }))
            .then(txInfo => takeArrays.addresses(accounts.length - 1))
            .then(address0 => assert.strictEqual(
                address0,
                accounts[accounts.length - 1],
                "should have taken in the last address"));
    });

});
