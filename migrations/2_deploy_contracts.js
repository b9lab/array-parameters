var TakeArrays = artifacts.require("./TakeArrays.sol");
var AccessibleStruct = artifacts.require("./AccessibleStruct.sol");
var PassedOnStruct = artifacts.require("./PassedOnStruct.sol");
var BigStructHolder = artifacts.require("./BigStructHolder.sol");

module.exports = deployer => {
    deployer.deploy([
        TakeArrays,
        AccessibleStruct,
        PassedOnStruct,
        BigStructHolder
    ]);
};
