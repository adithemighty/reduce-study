function customFindIndex(array, start, end) {
  // Failsafe in case the input isn't an array
  if (!Array.isArray(array)) {
    console.error("Provide an array.", array);
    return [];
  }

  if (array.length === 0) return [];

  const sliceEnd = (end < 0 ? array.length + end : end) || array.length;
  const sliceStart = start < 0 ? array.length + start : start;

  return array.reduce(function (acc, val, ind) {
    if (ind >= sliceStart && ind < sliceEnd) acc.push(val);

    return acc;
  }, []);
}

export default customFindIndex;
