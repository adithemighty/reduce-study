function customMap(array, callback) {
  // Failsafe in case the input isn't an array
  if (!Array.isArray(array)) {
    console.error("Provide an array. Can't map over", array);
    return [];
  }

  if (typeof callback !== "function") {
    console.error(
      typeof callback,
      " is not a valid callback. Callback must be a function."
    );
    return [];
  }

  // Pass along the index and array in the rest
  return array.reduce((acc, ...rest) => {
    return [...acc, callback(...rest)];
  }, []);
}

export default customMap;
