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

contract('TakeArrays', function(accounts) {

  it("should take in an array of addresses", function() {
    var takeArrays = TakeArrays.deployed();

    console.log(accounts);

    return takeArrays.takeAddresses.call(accounts, { from: accounts[0] })
      .then(function (success) {
        assert.isTrue(success, "should be able to take an array");
        return takeArrays.takeAddresses(accounts, { from: accounts[0] })
      })
      .then(function (txHash) {
        return web3.eth.getTransactionReceiptMined(txHash);
      })
      .then(function (receipt) {
        return takeArrays.addresses(accounts.length - 1);
      })
      .then(function (address0) {
        assert.equal(address0, accounts[accounts.length - 1], "should have taken in the last address");
        console.log(address0);
      });

  });

});
