describe("add()", function(){
  it("returns 10 when given 1, 1, 1, 1, 1, 1, 1, 1, 1, 1", function() {
    expect(add(1, 1, 1, 1, 1, 1, 1, 1, 1, 1)).toEqual(10);
  });

  it("returns 10 when given 5, 5", function() {
    expect(add(5, 5)).toEqual(10);
  });

  it("returns 5 when given 5", function() {
    expect(add(5)).toEqual(5);
  });

  it("returns undefined when given no parameter", function() {
    expect(add()).toBe(undefined);
  });
});

describe("divide()", function(){
  it("returns 1 when given 1, 1, 1, 1, 1, 1, 1, 1, 1, 1", function() {
    expect(divide(1, 1, 1, 1, 1, 1, 1, 1, 1, 1)).toEqual(1);
  });

  it("returns 2 when given 10, 5", function() {
    expect(divide(10, 5)).toEqual(2);
  });

  it("returns 5 when given 10, 2", function() {
    expect(divide(10, 2)).toEqual(5);
  });

  it("returns 5 when given 5 ", function() {
    expect(divide(5)).toEqual(5);
  });

  it("returns null when given no parameter", function() {
    expect(multiply()).toBe(undefined);
  });
});

describe("exponentiate()", function(){
  it("returns 4 when given 2, 2", function(){
    expect(exponentiate(2, 2)).toEqual(4);
  });

  it("returns 16 when given 2, 4", function(){
    expect(exponentiate(2, 4)).toEqual(16);
  });

  it("returns 16 when given 4, 2", function(){
    expect(exponentiate(4, 2)).toEqual(16);
  });
});

describe("multiply()", function(){
  it("returns 1 when given 1, 1, 1, 1, 1, 1, 1, 1, 1, 1", function() {
    expect(multiply(1, 1, 1, 1, 1, 1, 1, 1, 1, 1)).toEqual(1);
  });

  it("returns 10 when given 5, 2", function() {
    expect(multiply(5, 2)).toEqual(10);
  });

  it("returns 10 when given 2, 5", function() {
    expect(multiply(2, 5)).toEqual(10);
  });

  it("returns 5 when given 5 ", function() {
    expect(multiply(5)).toEqual(5);
  });

  it("returns null when given no parameter", function() {
    expect(multiply()).toBe(undefined);
  });
});

describe("subtract()", function(){
  it("returns 5 when given 10, 5", function() {
    expect(subtract(10, 5)).toEqual(5);
  });

  it("returns 0 when given 10, 2, 2, 2, 2, 2", function() {
    expect(subtract(10, 2, 2, 2, 2, 2)).toEqual(0);
  });

  it("returns undefined when given no parameter", function() {
    expect(subtract()).toBe(undefined);
  });

  it("returns -4 when given -5, 2, -3", function() {
    expect(subtract(-5, 2, -3)).toEqual(-4);
  });
});

describe("subtractAlways()", function(){
  it("returns -10 when given -5, 2, -3", function() {
    expect(subtractAlways(-5, 2, -3)).toEqual(-10);
  });
});
