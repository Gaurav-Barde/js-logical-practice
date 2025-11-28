// 🧩 Problem: Find the maximum of three numbers
// Examples: input: 10,20,5 ====> 20

const input = [85, 60, 55];

const findMaximumOfThree = (arr) => {
  let i = 0,
    j = 1,
    k = 2;

  if (arr[i] > arr[j] && arr[i] > arr[k]) {
    return arr[i];
  } else if (arr[j] > arr[i] && arr[j] > arr[k]) {
    return arr[j];
  } else return arr[k];
};

const result = findMaximumOfThree(input);
console.log(result);
