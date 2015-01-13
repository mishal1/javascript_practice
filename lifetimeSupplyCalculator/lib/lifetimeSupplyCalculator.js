function LifetimeSupplyCalculator(){
  this.maxAge = 71
}

LifetimeSupplyCalculator.prototype.setMaxAge = function(number) {
  this.maxAge = number
};

LifetimeSupplyCalculator.prototype.workOutSupply = function(age, amountConsumedPerDay) {
  var years = this.maxAge - age
  var totalConsumed = years * (amountConsumedPerDay * 36)
  totalConsumed = Math.round(totalConsumed)
  return "You will need " + totalConsumed + " of your snack choice to last you until the ripe old age of " + this.maxAge
};