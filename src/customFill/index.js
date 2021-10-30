function customFill(array, content, start, end) {
  // Failsafe in case the input isn't an array
  if (!Array.isArray(array)) {
    console.error("Provide an array.", array);
    return [];
  }

  const fillEnd = end || array.length;
  const fillStart = start || 0;

  return array.reduce(function (acc, val, ind, arr) {
    if (ind >= fillStart && ind < fillEnd) acc.push(content);
    else acc.push(val);

    return acc;
  }, []);
}

export default customFill;
