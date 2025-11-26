const arrayToObject = (arr, key = "id") => {
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    result[item[key]] = item;
  }
  return result;
};
