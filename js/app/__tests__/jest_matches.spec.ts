// Unity tests with jest

import sum from "../src/functions/sum";
import { throwErrorMock } from "../src/functions/throw-error";
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

  it("should be undefined", () => {
    const undefValue = undefined;
    expect(undefValue).toBeUndefined();
  });

  it("should be truthy", () => {
    const result = true;
    expect(result).toBeTruthy();
  });
});

describe("Strings and arrays", () => {
  it("should have I character", () => {
    const strMatch = "one ring to rule them all";
    expect(strMatch).toMatch(/ring/);
  });

  it("should have milk in list", () => {
    const list = ["milk", "fruits", "chicken", "potato"];
    expect(list).toContain("milk");
  });
});

describe("trow a error", () => {
  it("should trow a error", () => {
    //expect a callback with the exception/error
    //you can use regex with .toThrow(/^validation error/)
    expect(() => throwErrorMock()).toThrow("validation error");
  });
});
