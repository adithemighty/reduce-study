function customIncludes(array, condition) {
  // Failsafe in case the input isn't an array
  if (!Array.isArray(array)) {
    console.error("Provide an array.", array);
    return false;
  }

  if (array.length === 0) return false;

  return array.reduce(function (acc, val, ind, arr) {
    if (!acc && val === condition) acc = true;
    return acc;
  }, false);
}

export default customIncludes;
