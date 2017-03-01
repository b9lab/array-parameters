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
                assert.equal(values.length, 14, "should have 14 values");
                for (var index = 0; index < 14; index++) {
                    assert.equal(values[index], index + 1, "should get the indexth value");
                }
            });

    });

});
