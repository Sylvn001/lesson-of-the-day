// Unity tests with jest

import sum from "../src/functions/sum";

/*
 * Basic test with jest
 *
 */
describe("Calculator", () => {
  it("Should sum two values", () => {
    const result = sum(2, 3);
    //toBe use === operator | toEqual use == operator
    expect(result).toBe(5);
  });

  it("Sum should not be 0", () => {
    const result = sum(2, 2);
    expect(result).not.toBe(0);
  });
});

describe("Null, Undefined, Truthy...", () => {
  it("Should be null", () => {
    const nullValue = null;
    expect(nullValue).toBeNull();
  });
});
