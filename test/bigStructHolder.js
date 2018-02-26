const BigStructHolder = artifacts.require("./BigStructHolder.sol");

contract('BigStructHolder', accounts => {

    let bigStructHolder;

    beforeEach("should deploy a new instance", function() {
        return BigStructHolder.new({ from: accounts[0] })
            .then(created  => bigStructHolder = created);
    });

    it("should be possible to get values saved in constructor", () => {
        return bigStructHolder.bigStruct14s(0)
            .then(values => {
                assert.strictEqual(values.length, 14, "should have 14 values");
                values.forEach((value, index) => {
                    assert.strictEqual(value.toNumber(), index + 1, "should get the indexth value");
                });
            });
    });

});
