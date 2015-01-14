function TestArray (){}

TestArray.prototype.setArray = function(array) {
  this.array = array
};

TestArray.prototype.show = function() {
  return this.array
};

TestArray.prototype.iterateThroughArray = function() {
  var text = ""
  for(num = 0; num < this.array.length; num++){
    text+= this.array[num] + " "
  }
  return text
};

TestArray.prototype.iterateUsingForEach = function() {
  var text = ""
  this.array.forEach(function(element){
    text += element + " "
  });
  return text
};

TestArray.prototype.printEvenElements = function() {
  var text = ""
  for(num = 0; num < this.array.length; num+=2){
    text += this.array[num] + " "
  }
  return text
};

TestArray.prototype.forEachEvenElements = function() {
  var text = ""
  var array = this.array

  this.array.forEach(function(element){
    var index = array.indexOf(element)
    if(index % 2 === 0){
      text += element + " "
    }
    array[index] = 1
  });
  return text
};

TestArray.prototype.printIndex = function() {
  var text = ""
  var array = this.array
  for(num = 0; num < array.length; num++){
    var index = array.indexOf(array[num])
    text += index + ":" + array[num] + " "
    array[index] = 1
  }
  return text
};

TestArray.prototype.forEachPrintIndex = function() {
  var text = ""
  var array = this.array
  array.forEach(function(element){
    var index = array.indexOf(element)
    text += index + ":" + element + " "
    array[index] = 1
  });
  return text
};