import customSlice from "./";

const array = ["ant", "bison", "camel", "duck", "elephant"];

describe("Custom `findIndex` function", () => {
  it("should handle empty arrays", () => {
    const input = [];
    const actual = customSlice(input);
    const expected = input.slice();
    expect(actual).toStrictEqual(expected);
  });

  it("should slice with start index", () => {
    const actual = customSlice(array, 2);
    const expected = array.slice(2);
    expect(actual).toStrictEqual(expected);
  });

  it("should slice with start and end index", () => {
    const actual = customSlice(array, 2, 4);
    const expected = array.slice(2, 4);
    expect(actual).toStrictEqual(expected);
  });

  it("should slice with end index higher than array length", () => {
    const actual = customSlice(array, 1, 5);
    const expected = array.slice(1, 5);
    expect(actual).toStrictEqual(expected);
  });

  it("should slice with negative start", () => {
    const actual = customSlice(array, -2);
    const expected = array.slice(-2);
    expect(actual).toStrictEqual(expected);
  });

  it("should slice with negative end", () => {
    const actual = customSlice(array, 2, -1);
    const expected = array.slice(2, -1);
    expect(actual).toStrictEqual(expected);
  });
});
