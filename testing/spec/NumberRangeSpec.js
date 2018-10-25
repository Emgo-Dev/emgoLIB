describe("numbersFromTo()", function(){
  it("returns 0, 1, 2, 3, 4 when given 0, 4", function() {
    expect(numbersFromTo(0, 4)).toEqual([0, 1, 2, 3, 4]);
  });

  it("returns 0, 1 when given 0, 1", function() {
    expect(numbersFromTo(0, 1)).toEqual([0, 1]);
  });

  it("returns -1, 0, 1 when given -1, 1", function() {
    expect(numbersFromTo(-1, 1)).toEqual([-1, 0, 1]);
  });

  it("returns 1, 0, -1 when given 1, -1", function() {
    expect(numbersFromTo(1, -1)).toEqual([1, 0, -1]);
  });

  it("returns undefined when given nothing", function() {
    expect(numbersFromTo()).toEqual(undefined);
  });
});

describe("numbersBetween()", function(){
  it("returns 1, 2, 3 when given 0, 4", function() {
    expect(numbersBetween(0, 4)).toEqual([1, 2, 3]);
  });

  it("returns 3, 2, 1 when given 4, 0", function() {
    expect(numbersBetween(4, 0)).toEqual([3, 2, 1]);
  });
});

describe("randomBetween()", function(){
  it("returns a list of 4 items when given 0, 10, 4", function() {
    expect(randomBetween(0, 10, 4).length).toEqual(4);
  });

  it("returns a list of 4 items with at least one float when given 0, 10, 4", function() {
    expect(randomBetween(0, 10, 4).some( (n) => n > Math.floor(n) )).toBe(true);
    expect(randomBetween(0, 10, 4).length).toBe(4);
  });
});
