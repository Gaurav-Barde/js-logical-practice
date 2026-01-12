// 🧩 Problem: Find the sum of digits
// Examples: N = 987
// output: output= 24

const num = 987;

const sumOfDigits = (num) => {
  let sum = 0;
  let current = num;
  while (current > 10) {
    sum += current % 10;
    current = Math.floor(current / 10);
  }
  sum += Math.floor(current);

  return sum;
};

const result = sumOfDigits(num);
console.log(result);
