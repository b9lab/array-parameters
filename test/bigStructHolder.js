var BigStructHolder = artifacts.require("./BigStructHolder.sol");

contract('BigStructHolder', accounts => {

    it("should be possible to get values saved in constructor", () => {
        var bigStructHolder;

        return BigStructHolder.deployed()
            .then(instance => {
                bigStructHolder = instance;
                return bigStructHolder.bigStruct14s(0);
            })
            .then(values => {
                assert.strictEqual(values.length, 14, "should have 14 values");
                values.forEach((value, index) => {
                    assert.strictEqual(value.toNumber(), index + 1, "should get the indexth value");
                });
            });

    });

});
