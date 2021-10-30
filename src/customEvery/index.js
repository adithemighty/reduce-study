function customIncludes(array, condition) {
  // Failsafe in case the input isn't an array
  if (!Array.isArray(array)) {
    console.error("Provide an array.", array);
    return true;
  }

  // Failsafe in case the input isn't an array
  if (typeof condition !== "function") {
    console.error("Provide a callback function", condition);
    return true;
  }

  if (array.length === 0) return true;

  return array.reduce(function (acc, val, ind, arr) {
    if (!condition(val)) acc = false;

    return acc;
  }, true);
}

export default customIncludes;
