function customFlat(array, depth = 1) {
  if (typeof depth !== "number") {
    console.error("Provide a valid depth.", depth);
    return [];
  }

  // Failsafe in case the input isn't an array
  if (!Array.isArray(array)) {
    console.error("Provide an array.", array);
    return [];
  }

  if (array.length === 0) return [];

  const flatByOne = array.reduce(function (acc, val) {
    if (Array.isArray(val)) return [...acc, ...val];
    else acc.push(val);

    return acc;
  }, []);

  if (depth === 1) return flatByOne;

  return customFlat(flatByOne, depth - 1);
}

export default customFlat;
