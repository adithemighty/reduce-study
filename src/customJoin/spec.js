import customJoin from "./";

const array = ["apples", "pears", "bananas"];

describe("Custom `join` function", () => {
  it("should handle empty arrays", () => {
    const input = [];
    const actual = customJoin(input);
    const expected = input.join();
    expect(actual).toBe(expected);
  });

  const separators = [false, null, undefined, true, "", ", ", " - ", " / "];

  separators.forEach((separator) => {
    it(`should handle \`${separator}\` separator`, () => {
      const actual = customJoin(array, separator);

      const expected = array.join(separator);
      expect(actual).toBe(expected);
    });
  });
});
