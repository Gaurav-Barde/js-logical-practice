// 🧩 Problem: Find the Largest and Smallest Digit in a Number
// Examples: N = 9483
// output: Largest = 9; Smallest = 3

const num = 4567;

const findLargestAndSmallest = (num) => {
  let largest = 0;
  let smallest = null;
  let temp = num;

  while (temp > 0) {
    const digit = temp % 10;

    if (digit > largest) {
      largest = digit;
    }

    if (smallest && smallest < digit) {
      smallest = digit;
    } else smallest = digit;

    temp = (temp - (temp % 10)) / 10;
  }

  return { largest, smallest };
};

const result = findLargestAndSmallest(num);
console.log(result);
