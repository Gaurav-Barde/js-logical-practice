// 🧩 Problem: Check if a given number is a perfect number
// Input: N = 28
// output: true
// Reason: 1 + 2 + 4 + 7 + 14 = 28 : Because 28 is equal to the sum of its proper positive divisors (excluding the number itself)

const num = 26;

const checkPerfectNumber = (num) => {
  let sum = 0;

  let temp = num % 2 === 0 ? num / 2 : num / 2 - 1;

  while (temp > 0) {
    if (num % temp === 0) {
      sum += temp;
    }
    temp--;
  }

  if (sum === num) return true;

  return false;
};
const result = checkPerfectNumber(num);
console.log(result);
