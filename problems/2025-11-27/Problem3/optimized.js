// 🧩 Problem: Print sum of first N Natural numbers(integers starting from 1 to infinite)
// Examples: N = 5 ===> 1+2+3+4+5 = 15
console.time();
const num = 10000000000;

const sumOfNNaturalNum = (n) => {
  if (Number(n)) {
    let sum = (n * (n + 1)) / 2;

    return sum;
  }
  console.log("Given number is not a number");
};

const result = sumOfNNaturalNum(num);
console.log(result);

console.timeEnd();
