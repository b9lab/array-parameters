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

contract('BigStructHolder', function(accounts) {

  it("should be possible to get values saved in constructor", function() {
    var bigStructHolder = BigStructHolder.deployed();

    return bigStructHolder.bigStruct14s(0)
      .then(function (values) {
        assert.equal(values.length, 14, "should have 14 values");
        for (var index = 0; index < 14; index++) {
          assert.equal(values[index], index + 1, "should get the indexth value");
        }
      });

  });

});
