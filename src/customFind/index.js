function customFind(array, condition) {
  // Failsafe in case there's no condition
  if (typeof condition !== "function") {
    console.error("No callback provided");
    return undefined;
  }

  // Failsafe in case the input isn't an array
  if (!Array.isArray(array)) {
    console.error("Provide an array.", array);
    return undefined;
  }

  return array.reduce(function (acc, val, ind, arr) {
    if (!acc && condition(val, ind, arr)) acc = val;
    return acc;
  }, undefined);
}

export default customFind;
