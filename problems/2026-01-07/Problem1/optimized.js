// 🧩 Problem: Find out largest and second largest occurrences of the repeated elements in a given array
// Examples: const arr = [1,1,1,4,2,2,2,3,5,2];
// output: output= {2: 4, 1: 3}

const arr = [1, 1, 1, 4, 2, 2, 2, 3, 5, 2];

const findLargestAndSecondLargestOcc = (arr) => {
  const freq = {};

  for (const num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  let first = null;
  let second = null;

  for (const [key, count] of Object.entries(freq)) {
    if (!first || count > first.count) {
      second = first;
      first = { key, count };
    } else if (!second || count > second.count) {
      second = { key, count };
    }
  }

  return new Map([
    [first.key, first.count],
    [second.key, second.count],
  ]);
};

const result = findLargestAndSecondLargestOcc(arr);
console.log(result);
