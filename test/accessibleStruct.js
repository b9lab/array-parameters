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

contract('AccessibleStruct', function(accounts) {

  it("should be possible to get values saved in constructor", function() {
    var accessibleStruct = AccessibleStruct.deployed();

    return accessibleStruct.variableLengths(0)
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
