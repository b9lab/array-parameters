var PassedOnStruct = artifacts.require("./PassedOnStruct.sol");

contract('PassedOnStruct', accounts => {

    it("should be possible to get values saved in AccessibleStruct", () => {
        var passedOnStruct;

        return PassedOnStruct.deployed()
            .then(instance => {
                passedOnStruct = instance;
                return passedOnStruct.getStruct.call(0);
            })
            .then(variableLength => {
                assert.strictEqual(variableLength.length, 2, "should only have 2 values");
                assert.strictEqual(variableLength[0].toNumber(), 1, "should be get the 1st fixed length");
                // In other words, the variable length field is missing
                assert.strictEqual(variableLength[1].toNumber(), 4, "should be get the 2st fixed length");
            });

    });

});
