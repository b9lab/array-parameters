var AccessibleStruct = artifacts.require("./AccessibleStruct.sol");

contract('AccessibleStruct', function(accounts) {

    it("should be possible to get values saved in constructor", function() {
        var accessibleStruct;

        return AccessibleStruct.deployed()
            .then(instance => {
                accessibleStruct = instance;
                return accessibleStruct.variableLengths(0);
            })
            .then(function (variableLength) {
                assert.equal(variableLength.length, 2, "should only have 2 values");
                assert.equal(variableLength[0].valueOf(), 1, "should be get the 1st fixed length");
                // In other words, the variable length field is missing
                assert.equal(variableLength[1].valueOf(), 4, "should be get the 2st fixed length");
                return accessibleStruct.getVariableLengthAt(0, 0);
            })
            .then(function (value) {
                assert.equal(value.valueOf(), 2, "should get first value of variable length");
                return accessibleStruct.getVariableLengthAt(0, 1);
            })
            .then(function (value) {
                assert.equal(value.valueOf(), 3, "should get second value of variable length");
            });

    });

});
