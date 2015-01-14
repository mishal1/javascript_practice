describe("Array Practice", function(){
  var array

  beforeEach(function(){
    array = new TestArray
    array.setArray(['a', 'b', 'c', 'd', 'h', 'f', 'l', 'j', 'p', 'o', 'i', 'k', 'm', 'i', 'l', 'o', 'g', 's', 'x' ,'k'])
  });


   it("should set an array", function(){
    expect(array.show()).toEqual(['a', 'b', 'c', 'd', 'h', 'f', 'l', 'j', 'p', 'o', 'i', 'k', 'm', 'i', 'l', 'o', 'g', 's', 'x' ,'k'])
  });

  it("should iterate through an array and print each element", function(){
    expect(array.iterateThroughArray()).toEqual("a b c d h f l j p o i k m i l o g s x k ")
  });

});