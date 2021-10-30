import customFind from "./";

const array = [5, 12, 8, 130, 44];

describe("Custom `find` function", () => {
  it("should handle empty arrays", () => {
    const input = [];
    const actual = customFind(input);
    const expected = input.find(() => true);
    expect(actual).toStrictEqual(expected);
  });

  it("should find matching element", () => {
    const condition = (element) => element > 10;
    const actual = customFind(array, condition);
    const expected = array.find(condition);
    expect(actual).toStrictEqual(expected);
  });

  it("should handle cases without matching elements", () => {
    const condition = (element) => element < 0;
    const actual = customFind(array, condition);
    const expected = array.find(condition);
    expect(actual).toStrictEqual(expected);
  });
});
