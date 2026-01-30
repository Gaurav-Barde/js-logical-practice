// 🧩 Problem: Check if a Number is a Harshad Number
// Examples: N = 18
// output: Harshad Number
// Reason: since 18 is divisible by 1 + 8 = 9

const isHarshadNumber = (num) => {
  if (!Number.isInteger(num) || num <= 0) return false;

  let sum = 0;
  let temp = num;

  while (temp > 0) {
    sum += temp % 10;
    temp = Math.floor(temp / 10);
  }

  return num % sum === 0;
};

const result = isHarshadNumber(18);
console.log(result);
