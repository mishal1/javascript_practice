describe('LifetimeSupplyCalculator', function(){
  var supply;

  beforeEach(function(){
    supply = new LifetimeSupplyCalculator
  });

  it("should have a set max age when initialized", function(){
    expect(supply.maxAge).toEqual(71)
  });

  it("should be able to change max age", function(){
    supply.setMaxAge(73)
    expect(supply.maxAge).toEqual(73)
  });

  it("should be able to work out lifetime supply of of favourite snack", function(){
    expect(supply.workOutSupply(22, 1)).toEqual("You will need 1764 of your snack choice to last you until the ripe old age of 71")
  });

  it("should round the final amount consumed up", function(){
    expect(supply.workOutSupply(22, 1.35)).toEqual("You will need 2381 of your snack choice to last you until the ripe old age of 71")
  });

});