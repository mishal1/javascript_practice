function TestArray (){}

TestArray.prototype.setArray = function(array) {
  this.array = array
};

TestArray.prototype.show = function() {
  return this.array
};

TestArray.prototype.iterateThroughArray = function() {
  var text =""
  for(num = 0; num < this.array.length; num++){
    text+= this.array[num] + " "
  }
  return text
};