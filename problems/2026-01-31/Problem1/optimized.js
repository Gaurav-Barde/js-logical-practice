// 🧩 Problem: Print All Factors of a Number
// Input: N = 24
// output: [1,2,3,4,6,8,12,24]

const num = 24;

const printAllFactorsOfANumber = (num) => {
  if (num <= 0) return [];

  const factors = [];
  const sqrt = Math.floor(Math.sqrt(num));

  for (let i = 1; i <= sqrt; i++) {
    if (num % i === 0) {
      factors.push(i);

      if (i !== num / i) {
        factors.push(num / i);
      }
    }
  }

  return factors.sort((a, b) => a - b);
};

const result = printAllFactorsOfANumber(num);
console.log(result);
