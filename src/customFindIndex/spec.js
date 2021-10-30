import customFindIndex from "./";

const array = [5, 12, 8, 130, 44];

describe("Custom `findIndex` function", () => {
  it("should handle empty arrays", () => {
    const input = [];
    const actual = customFindIndex(input);
    const expected = input.findIndex(() => true);
    expect(actual).toStrictEqual(expected);
  });

  it("should find matching index", () => {
    const condition = (element) => element > 13;
    const actual = customFindIndex(array, condition);
    const expected = array.findIndex(condition);
    expect(actual).toStrictEqual(expected);
  });

  it("should handle no matching items", () => {
    const condition = (element) => element > 10;
    const actual = customFindIndex(array, condition);
    const expected = array.findIndex(condition);
    expect(actual).toStrictEqual(expected);
  });
});
