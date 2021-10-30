import customFilter from "./";

const array = [1, 2, 3, 4, 5, 6];

describe("Custom `filter` function", () => {
  it("should handle empty arrays", () => {
    const input = [];
    const actual = customFilter(input);
    const expected = input.filter(() => true);
    expect(actual).toStrictEqual(expected);
  });

  it("should filter arrays", () => {
    const condition = (val) => val % 2 === 0;
    const actual = customFilter(array, condition);
    const expected = array.filter(condition);
    expect(actual).toStrictEqual(expected);
  });
});
