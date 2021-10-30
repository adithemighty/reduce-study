import customMap from "./";

describe("Custom `map` function", () => {
  it("should not crash if supplied array isn't an array", () => {
    const input = {};
    const actual = customMap(input);
    const expected = [];
    expect(actual).toStrictEqual(expected);
  });

  it("should not crash if supplied callback isn't a function", () => {
    const input = [];
    const actual = customMap(input, null);
    const expected = [];
    expect(actual).toStrictEqual(expected);
  });

  it("should handle mapping over simple values", () => {
    const input = [1, 2, 3];
    const callback = (val) => val + 1;
    const actual = customMap(input, callback);
    const expected = input.map(callback);
    expect(actual).toStrictEqual(expected);
  });

  it("should handle cases when callback uses index", () => {
    const input = [1, 2, 3];
    const callback = (val, ind) => val + ind;
    const actual = customMap(input, callback);
    const expected = input.map(callback);
    expect(actual).toStrictEqual(expected);
  });

  it("should handle cases when callback uses array", () => {
    const input = [1, 2, 3];
    const callback = (val, _, arr) => val * arr.length;
    const actual = customMap(input, callback);
    const expected = input.map(callback);
    expect(actual).toStrictEqual(expected);
  });
});
