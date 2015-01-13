function Age(){};

Age.prototype.calculate = function(year1, year2) {
  if(year1 < year2){
    return this.workOutAge(year1, year2)
  } else if(year1 == year2){
    return "You are either 1 or younger!"
  } else{
    return this.workOutAge(year2, year1)
  }
};

Age.prototype.calculateWithoutCurrentYear = function(birthYear) {
  var currentYear = new Date()
  currentYear = currentYear.getFullYear()
  return this.calculate(birthYear, currentYear)
};

Age.prototype.workOutAge = function(birthYear, currentYear) {
  var age1 = currentYear - birthYear
  var age2 = age1 -1
  return "You are either " + age2 + " or " + age1
};