describe("ageCalculator:", function(){

  var age;

  beforeEach(function(){
    age = new Age
  });

  it("a user can enter in their birth year and the current year to work out an age", function(){
    expect(age.calculate(1992,2015)).toEqual("You are either 22 or 23")
  });

  it("a user can work out an age without giving the current year", function(){
    expect(age.calculateWithoutCurrentYear(1992)).toEqual("You are either 22 or 23")
  });

  it("a user can enter a birth year and current year in any order", function(){
    expect(age.calculate(2015, 1992)).toEqual("You are either 22 or 23")
  });

  it("a user can enter the same dates", function(){
    expect(age.calculate(2015, 2015)).toEqual("You are either 1 or younger!")
  })

});