function Geometrizer (){};

Geometrizer.prototype.calCircumference = function(radius) {
  return "The circumference is "+ 2 * Math.PI * radius
};

Geometrizer.prototype.calArea = function(radius) {
  return "The area is "+ Math.PI * (Math.pow(radius, 2))
};