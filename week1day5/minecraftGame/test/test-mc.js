var minecraftWorld = require("../minecraft-world.js");
var expect = require('chai').expect; //npm package for expect

describe('Minecraft World', function() {

  beforeEach(function(done) {
    done();
  });

  it('should return wood after chopping', function() {
    //test case code
    //steps:
    //1. setup stage, call some functions, etc
    //2. run the code you are testing
    var wood = minecraftWorld.chopWood();
    //3. check that actual return value is the same as the expected result
    expect(wood).to.eql(1);
  });

  it('should not return wood if wood depleted', function() {
    minecraftWorld.wood = 0;
  
    expect(minecraftWorld.chopWood()).to.eql(0);
  
  });
});

