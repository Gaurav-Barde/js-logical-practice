// 🧩 Problem: Print All Factors of a Number
// Input: N = 24
// output: [1,2,3,4,6,8,12,24]

const num = 24;

const printAllFactorsOfANumber = (num) => {
  const factors = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
};

const result = printAllFactorsOfANumber(num);
console.log(result);
