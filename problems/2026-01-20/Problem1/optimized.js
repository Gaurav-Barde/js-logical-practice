// 🧩 Problem: Find the Largest and Smallest Digit in a Number
// Examples: N = 9483
// output: Largest = 9; Smallest = 3

const num = 4567;

const findLargestAndSmallest = (num) => {
  if (num === 0) return { largest: 0, smallest: 0 };
  if (num < 0) num = -num;

  let largest = 0;
  let smallest = 9;

  while (num > 0) {
    const digit = num % 10;

    if (digit > largest) largest = digit;
    if (digit < smallest) smallest = digit;

    num = (num - digit) / 10;
  }

  return { largest, smallest };
};

const result = findLargestAndSmallest(num);
console.log(result);
