var AccessibleStruct = artifacts.require("./AccessibleStruct.sol");

contract('AccessibleStruct', accounts => {

    it("should be possible to get values saved in constructor", () => {
        var accessibleStruct;

        return AccessibleStruct.deployed()
            .then(instance => {
                accessibleStruct = instance;
                return accessibleStruct.variableLengths(0);
            })
            .then(variableLength => {
                assert.strictEqual(variableLength.length, 2, "should only have 2 values");
                assert.strictEqual(variableLength[0].toNumber(), 1, "should be get the 1st fixed length");
                // In other words, the variable length field is missing
                assert.strictEqual(variableLength[1].toNumber(), 4, "should be get the 2st fixed length");
                return accessibleStruct.getVariableLengthAt(0, 0);
            })
            .then(value => {
                assert.strictEqual(value.toNumber(), 2, "should get first value of variable length");
                return accessibleStruct.getVariableLengthAt(0, 1);
            })
            .then(value => {
                assert.strictEqual(value.toNumber(), 3, "should get second value of variable length");
            });

    });

});
