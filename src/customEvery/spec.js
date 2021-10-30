import customEvery from "./";

describe("Custom `every` function", () => {
  it("should handle empty arrays", () => {
    const input = [];
    const actual = customEvery(input);
    const expected = input.every(() => {});
    expect(actual).toStrictEqual(expected);
  });

  it("should handle simple sorting", () => {
    const array = [1, 30, 39, 29, 10, 13];
    const condition = (currentValue) => currentValue < 40;
    const actual = customEvery(array, condition);
    const expected = array.every(condition);
    expect(actual).toStrictEqual(expected);
  });

  it("should handle simple sorting", () => {
    const array = [1, 30, 39, 29, 10, 13];
    const condition = (currentValue) => currentValue < 20;
    const actual = customEvery(array, condition);
    const expected = array.every(condition);
    expect(actual).toStrictEqual(expected);
  });
});
