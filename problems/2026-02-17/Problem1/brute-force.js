// 🧩 Problem: Calculate the Sum of All Factors of a Number
// Input: N = 12
// output: sum = 28
// Reason: 1 + 2 + 3 + 4 + 6 + 12 = 28

const num = 18;

const sumOfAllFactors = (num) => {
  let sum = num + (num % 2 === 0 ? num / 2 : 0);
  let temp = num % 2 === 0 ? num / 2 - 1 : num / 2 - 1.5;

  while (temp > 0) {
    if (num % temp === 0) {
      sum += temp;
    }
    temp--;
  }
  return sum;
};

const result = sumOfAllFactors(num);
console.log(result);
