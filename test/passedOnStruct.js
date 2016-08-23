web3.eth.getTransactionReceiptMined = function (txnHash, interval) {
  var transactionReceiptAsync;
  interval |= 500;
  transactionReceiptAsync = function(txnHash, resolve, reject) {
    try {
      var receipt = web3.eth.getTransactionReceipt(txnHash);
      if (receipt == null) {
        setTimeout(function () {
          transactionReceiptAsync(txnHash, resolve, reject);
        }, 500);
      } else {
        resolve(receipt);
      }
    } catch(e) {
      reject(e);
    }
  };

  return new Promise(function (resolve, reject) {
    transactionReceiptAsync(txnHash, resolve, reject);
  });
};

contract('PassedOnStruct', function(accounts) {

  it("should be possible to get values saved in AccessibleStruct", function() {
    var passedOnStruct = PassedOnStruct.deployed();

    return passedOnStruct.getStruct.call(0)
      .then(function (variableLength) {
        assert.equal(variableLength.length, 2, "should only have 2 values");
        assert.equal(variableLength[0].valueOf(), 1, "should be get the 1st fixed length");
        // In other words, the variable length field is missing
        assert.equal(variableLength[1].valueOf(), 4, "should be get the 2st fixed length");
      });

  });

});
