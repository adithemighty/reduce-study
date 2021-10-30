import customReverse from "./";

describe("Custom `reverse` function", () => {
  it("should handle empty arrays", () => {
    const input = [];
    const actual = customReverse(input);
    const expected = input.reverse();
    expect(actual).toStrictEqual(expected);
  });

  it("should find matching numbers", () => {
    const array = [1, 2, 3];
    const actual = customReverse(array.slice());
    const expected = array.reverse();
    expect(actual).toStrictEqual(expected);
  });
});
