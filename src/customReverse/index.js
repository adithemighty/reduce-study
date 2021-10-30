function customReverse(array) {
  // Failsafe in case the input isn't an array
  if (!Array.isArray(array)) {
    console.error("Provide an array. Can't map over", array);
    return [];
  }

  return array.reduce((acc, val) => {
    return [val, ...acc];
  }, []);
}

export default customReverse;
