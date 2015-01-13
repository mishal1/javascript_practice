describe("FortuneTeller:", function(){

  var fortune;

  beforeEach(function(){
    fortune = new FortuneTeller
  });

  it("a user's number of children can be set", function(){
    fortune.setNumberOfChildren(1)
    expect(fortune.numberOfChildren).toEqual(1)
  });

  it("a user's partner's name can be set", function(){
    fortune.setPartnersName("something")
    expect(fortune.partnersName).toEqual("something")
  });

  it("a user's geographical location can be set", function(){
    fortune.setGeographicalLocation("something")
    expect(fortune.geographicalLocation).toEqual("something")
  });

  it("a user's job title can be set", function(){
    fortune.setJobTitle("something")
    expect(fortune.jobTitle).toEqual("something")
  });

  it("a user's fortune can be told", function(){
    fortune.setNumberOfChildren("N")
    fortune.setPartnersName("Z")
    fortune.setGeographicalLocation("Y")
    fortune.setJobTitle("X")
    expect(fortune.showFortune()).toEqual("You will be a X in Y, and married to Z with N kids.")
  });

});