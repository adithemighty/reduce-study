import customFlat from "./";

describe("Custom `flat` function", () => {
  it("should handle empty arrays", () => {
    const input = [];
    const actual = customFlat(input);
    const expected = input.flat();
    expect(actual).toStrictEqual(expected);
  });

  it("should flat arrays", () => {
    const array = [0, 1, 2, [3, 4]];
    const actual = customFlat(array);
    const expected = array.flat();
    expect(actual).toStrictEqual(expected);
  });

  it("should flat arrays until a defined depth", () => {
    const array = [0, 1, 2, [[[3, 4]]]];
    const depth = 2;
    const actual = customFlat(array, depth);
    const expected = array.flat(depth);
    expect(actual).toStrictEqual(expected);
  });

  it("should flat arrays until a defined depth", () => {
    const array = [0, 1, 2, [[[[3, 4]]]]];
    const depth = 2;
    const actual = customFlat(array, depth);
    const expected = array.flat(depth);
    expect(actual).toStrictEqual(expected);
  });
});
