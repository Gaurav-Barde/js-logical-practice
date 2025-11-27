// 🧩 Problem: Print the sum of all odd numbers upto N
// Examples: N = 10 ===> 1 + 3 + 5 + 7 + 9 = 25
const num = 19;
const printSumOfNumbersUpToN = (n) => {
  if (Number(n)) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      if (i % 2 !== 0) {
        sum += i;
      }
    }
    return sum;
  } else console.log("Given number is not a number");
};

const result = printSumOfNumbersUpToN(num);
console.log(result);
