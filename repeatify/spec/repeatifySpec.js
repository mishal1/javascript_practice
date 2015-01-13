describe("Repeatify", function(){

  it("should repeat a string N amount of times", function(){
    expect("hello".repeatify(3)).toEqual("hellohellohello")
  });

});