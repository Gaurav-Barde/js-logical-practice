// 🧩 Problem: Print the sum of all odd numbers upto N
// Examples: N = 10 ===> 1 + 3 + 5 + 7 + 9 = 25
const num = 16;
const printSumOfNumbersUpToN = (n) => {
  if (Number(n)) {
    let sum = 0;
    if (n % 2 === 0) {
      sum = (n / 2) ** 2;
    } else {
      sum = Math.floor(n / 2) ** 2 + n;
    }
    return sum;
  } else console.log("Given number is not a number");
};

const result = printSumOfNumbersUpToN(num);
console.log(result);
