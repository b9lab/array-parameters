module.exports = function(deployer) {
	deployer.deploy([
		TakeArrays,
		AccessibleStruct,
		PassedOnStruct,
		BigStructHolder
	]);
};
