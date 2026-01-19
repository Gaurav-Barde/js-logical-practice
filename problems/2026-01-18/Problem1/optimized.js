// 🧩 Problem: Find the Average of Digits
// Examples: N = 4567
// output: Average = 5.5
// reason: 4 + 5 + 6 + 7 = 22 / 4 ==> 5.5

const num = 4567;

const averageOfDigits = (num) => {
  if (num < 0) return null;
  if (num === 0) return 0;

  let sum = 0;
  let count = 0;

  while (num > 0) {
    sum += num % 10;
    count++;
    num = (num - (num % 10)) / 10;
  }

  return sum / count;
};

const result = averageOfDigits(5);
console.log(result);
