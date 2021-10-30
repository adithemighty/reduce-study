import customFill from "./";

describe("Custom `fill` function", () => {
  it("should handle empty arrays", () => {
    const input = [];
    const actual = customFill(input);
    const expected = input.fill(0);
    expect(actual).toStrictEqual(expected);
  });

  it("should fill entire arrays", () => {
    const array = [1, 2, 3, 4];
    const actual = customFill(array.slice(), 6);
    array.fill(6);
    expect(actual).toStrictEqual(array);
  });

  it("should fill with `null`", () => {
    const array = [1, 2, 3, 4];
    const actual = customFill(array.slice(), null);
    array.fill(null);
    expect(actual).toStrictEqual(array);
  });

  it("should fill partial arrays with defined `start`", () => {
    const array = [1, 2, 3, 4];
    const actual = customFill(array.slice(), 5, 1);
    array.fill(5, 1);
    expect(actual).toStrictEqual(array);
  });

  it("should fill partial arrays with defined `end`", () => {
    const array = [1, 2, 3, 4];
    const actual = customFill(array.slice(), 0, 2, 4);
    array.fill(0, 2, 4);
    expect(actual).toStrictEqual(array);
  });
});
