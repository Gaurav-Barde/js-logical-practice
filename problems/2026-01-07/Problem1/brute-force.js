// 🧩 Problem: Find out largest and second largest occurrences of the repeated elements in a given array
// Examples: const arr = [1,1,1,4,2,2,2,3,5,2];
// output: output= [2: 4, 1: 3]

const arr = [1, 1, 1, 4, 2, 2, 2, 3, 5, 2];

const findLargestAndSecondLargestOcc = (arr) => {
  const obj = {};

  for (let i of arr) {
    if (obj.hasOwnProperty(i)) {
      obj[i] = obj[i] + 1;
    } else {
      obj[i] = 1;
    }
  }

  const result = new Map();
  Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .forEach((item) => result.set(item[0], item[1]));

  return result;
};

const result = findLargestAndSecondLargestOcc(arr);
console.log(result);
