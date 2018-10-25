describe("area()", function(){
  it("returns 78.53981633974483 when given \"circle\", 5", function() {
    expect(area("circle", 5)).toEqual(78.53981633974483);
  });

  it("returns 25 when given \"square\", 5", function() {
    expect(area("square", 5)).toEqual(25);
  });

  it("returns 25 when given \"rectangle\", 5, 5", function() {
    expect(area("rectangle", 5, 5)).toEqual(25);
  });

  it("returns 50 when given \"rectangle\", 5, 10", function() {
    expect(area("rectangle", 5, 10)).toEqual(50);
  });
});

describe("circumference()", function(){
  it("returns 31.41592653589793 when given 5", function() {
    expect(circumference(5)).toEqual(31.41592653589793);
  });
});

describe("findPi()", function(){
  it("returns 3.1417360992606653", function() {
    expect(findPI()).toEqual(3.1417360992606653);
  });
});

describe("numbersFromTo()", function(){
  it("returns [0, 1, 2, 3, 4, 5] when given 0, 5", function() {
    let x = true;
    let y = [0, 1, 2, 3, 4, 5];
    numbersFromTo(0, 5).forEach((a,b,c)=>{
      if(a !== y[b] ){ x = false; }
    });
    expect(x).toBe(true);
  });
});

describe("toCelcius()", function(){
  it("returns 37.77777777777778 when given 100", function() {
    expect(toCelcius(100)).toEqual(37.77777777777778);
  });
});

describe("toFahrenheit()", function(){
  it("returns 100 when given 37.77777777777778", function() {
    expect(toFahrenheit(37.77777777777778)).toEqual(100);
  });
});

describe("volume()", function(){
  it("returns 125 when given \"cube\", 5", function() {
    expect(volume("cube", 5)).toEqual(125);
  });

  it("returns 0.5641895835477563 when given \"radius\", 5, 5", function() {
    expect(volume("radius", 5, 5)).toEqual(0.5641895835477563);
  });
});

