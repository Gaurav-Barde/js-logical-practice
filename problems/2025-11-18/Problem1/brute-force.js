// 🧩 Problem: Given an array of elements, find all elements that occur more than once and print each duplicate element along with its occurrence count.

// Example Input:
// [3, 5, 3, 2, 8, 5, 5, 2]

// Example Output:
// 3 → 2 times
// 5 → 3 times
// 2 → 2 times

const arr = [4, 7, 2, 7, 9, 4, 1, 2, 8, 7, 4, 3];

const findAndPrintDuplicate = (inputArr) => {
  const resultObj = {};
  let count = 1;

  inputArr.forEach((item) => {
    if (!Object.hasOwn(resultObj, item)) {
      resultObj[item] = count;
    } else {
      resultObj[item] = resultObj[item] + 1;
    }
  });

  for (let i in resultObj) {
    if (resultObj[i] < 2) {
      delete resultObj[i];
    }
  }

  return resultObj;
};

const result = findAndPrintDuplicate(arr);

console.log(result);
