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

  it("should iterate through an array using forEach", function(){
    expect(array.iterateUsingForEach()).toEqual("a b c d h f l j p o i k m i l o g s x k ")
  });

  it("should iterate through an array and print only the even elements", function(){
    expect(array.printEvenElements()).toEqual("a c h l p i m l g x ")
  });

  it("should iterate through an array and print only the even elements using forEach", function(){
    expect(array.forEachEvenElements()).toEqual("a c h l p i m l g x ")
  });

  it("should iterate through an array and prints the element and the index", function(){
    expect(array.printIndex()).toEqual("0:a 1:b 2:c 3:d 4:h 5:f 6:l 7:j 8:p 9:o 10:i 11:k 12:m 13:i 14:l 15:o 16:g 17:s 18:x 19:k ")
  });

  it("should iterate through an array and prints the element and the index using forEach", function(){
    expect(array.forEachPrintIndex()).toEqual("0:a 1:b 2:c 3:d 4:h 5:f 6:l 7:j 8:p 9:o 10:i 11:k 12:m 13:i 14:l 15:o 16:g 17:s 18:x 19:k ")
  });

});