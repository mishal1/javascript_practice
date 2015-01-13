describe("tempConverter", function(){
  var converter; 

  beforeEach(function(){
    converter = new tempConverter
  });

  it("should convert celsius to fahrenheit", function(){
    expect(converter.celsiusToFahrenheit(5)).toEqual("5°C is 41°F")
  });

  it("should convert fahrenheit to celsius", function(){
    expect(converter.fahrenheitToCelsius(41)).toEqual("41°F is 5°C")
  });

});