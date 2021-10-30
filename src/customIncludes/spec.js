import customIncludes from "./";

describe("Custom `includes` function", () => {
  it("should handle empty arrays", () => {
    const input = [];
    const actual = customIncludes(input);
    const expected = input.includes();
    expect(actual).toStrictEqual(expected);
  });

  it("should find matching numbers", () => {
    const array = [1, 2, 3];
    const condition = 2;
    const actual = customIncludes(array, condition);
    const expected = array.includes(condition);
    expect(actual).toStrictEqual(expected);
  });

  it("should find matching falsy values", () => {
    const array = [1, false, 3];
    const condition = false;
    const actual = customIncludes(array, condition);
    const expected = array.includes(condition);
    expect(actual).toStrictEqual(expected);
  });

  it("should matching strings", () => {
    const array = ["cat", "dog", "bat"];
    const condition = "cat";
    const actual = customIncludes(array, condition);
    const expected = array.includes(condition);
    expect(actual).toStrictEqual(expected);
  });

  it("should handle partial matches", () => {
    const array = ["cat", "dog", "bat"];
    const condition = "ca";
    const actual = customIncludes(array, condition);
    const expected = array.includes(condition);
    expect(actual).toStrictEqual(expected);
  });
});
