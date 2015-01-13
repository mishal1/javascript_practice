function tempConverter(){};

tempConverter.prototype.celsiusToFahrenheit = function(celsius) {
  var fahrenheit = ((celsius * 9) / 5) + 32
  return celsius + "°C is "+ fahrenheit + "°F"
};

tempConverter.prototype.fahrenheitToCelsius = function(fahrenheit) {
  var celsius = ((fahrenheit - 32) * 5) / 9
  return fahrenheit + "°F is "+ celsius + "°C"
};