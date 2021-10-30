function customJoin(array, separator = ",") {
  // Failsafe in case the input isn't an array
  if (!Array.isArray(array)) return "";

  return array.reduce(function (acc, val, ind, arr) {
    return (acc += val + (ind === arr.length - 1 ? "" : separator));
  }, "");
}

export default customJoin;
