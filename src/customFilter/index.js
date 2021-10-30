function customFilter(array, condition) {
  // Failsafe in case there's no condition
  if (typeof condition !== "function") {
    console.error("No callback provided");
    return array;
  }

  // Failsafe in case the input isn't an array
  if (!Array.isArray(array)) {
    console.error("Provide an array. Can't filter", array);
    return [];
  }

  return array.reduce(function (acc, val, ind, arr) {
    if (condition(val, ind, arr)) acc.push(val);

    return acc;
  }, []);
}

export default customFilter;
