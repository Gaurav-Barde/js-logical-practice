// 🧩 Problem: Print all numbers divisible by 3 & 5 upto N
// Examples: N = 15 ===> 15, N = 45 ===> 15,30,45
const num = 16;
const printAllNumDivisibleBy3And5 = (n) => {
  if (Number(n)) {
    const result = [];
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push(i);
      }
    }
    return result;
  } else console.log("Given number is not a number");
};

const result = printAllNumDivisibleBy3And5(num);
console.log(result);
