// 🧩 Problem: Find the sum of digits
// Examples: N = 987
// output: output= 24

const num = 987;

const sumOfDigits = (num) => {
  let sum = 0;

  if (num < 0) num = -num;

  while (num > 0) {
    sum += num % 10;
    num = (num - (num % 10)) / 10;
  }

  return sum;
};

const result = sumOfDigits(num);
console.log(result);
