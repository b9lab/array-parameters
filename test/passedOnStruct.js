var PassedOnStruct = artifacts.require("./PassedOnStruct.sol");

contract('PassedOnStruct', function(accounts) {

    it("should be possible to get values saved in AccessibleStruct", function() {
        var passedOnStruct;

        return PassedOnStruct.deployed()
            .then(instance => {
                passedOnStruct = instance;
                return passedOnStruct.getStruct.call(0);
            })
            .then(function (variableLength) {
                assert.equal(variableLength.length, 2, "should only have 2 values");
                assert.equal(variableLength[0].valueOf(), 1, "should be get the 1st fixed length");
                // In other words, the variable length field is missing
                assert.equal(variableLength[1].valueOf(), 4, "should be get the 2st fixed length");
            });

    });

});
