function FortuneTeller(){}

FortuneTeller.prototype.setNumberOfChildren = function(number) {
  this.numberOfChildren = number
};

FortuneTeller.prototype.setPartnersName = function(name) {
  this.partnersName = name
};

FortuneTeller.prototype.setGeographicalLocation = function(location) {
  this.geographicalLocation = location
};

FortuneTeller.prototype.setJobTitle = function(jobTitle) {
  this.jobTitle = jobTitle
};

FortuneTeller.prototype.showFortune = function() {
  return "You will be a "+ this.jobTitle + " in " + this.geographicalLocation + ", and married to " + this.partnersName + " with " + this.numberOfChildren + " kids."
};
