describe("exponentiate()", function(){
  it("returns 5 when given 5, 1", function() {
    expect(exponentiate(5, 1)).toEqual(5);
  });

  it("returns 25 when given 5, 2", function() {
    expect(exponentiate(5, 2)).toEqual(25);
  });

  it("returns -25 when given -5, 2", function() {
    expect(exponentiate(-5, 2)).toEqual(-25);
  });

  it("returns null when given no parameter", function() {
    expect(exponentiate()).toBe(null);
  });
});
