describe("Geometrizer", function(){

  var geometrizer;

  beforeEach(function(){
    geometrizer = new Geometrizer
  })

  it("should work out the circumference of a circile", function(){
    expect(geometrizer.calCircumference(3)).toEqual("The circumference is 18.84955592153876")
  });

  it("should work out the the area of a circle", function(){
    expect(geometrizer.calArea(3)).toEqual("The area is 28.274333882308138")
  });

});