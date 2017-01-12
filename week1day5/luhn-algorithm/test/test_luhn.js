var assert = require("chai").assert;
var luhnCheck = require("../lib/luhnchecker");

describe("Luhn Tester", function() {
  it("79927398713", function() {
    var number = 79927398713;
    var result = luhnCheck(number);
    assert.isTrue(result);
  });
 }); 
