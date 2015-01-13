String.prototype.repeatify = String.prototype.repeatify || function(multiplier) {
  return new Array( multiplier + 1 ).join(this)
};