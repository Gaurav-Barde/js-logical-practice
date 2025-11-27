// 🧩 Problem: Print squares of numbers from 1 to N
// Examples: N = 5 ===> 1,4,9,16,25
const num = 5;
const squareOfNumbersUptoN = (n) => {
  if (Number(n)) {
    const result = [];
    for (let i = 1; i <= n; i++) {
      result.push(i * i);
    }
    return result;
  } else console.log("Given number is not a number");
};

const result = squareOfNumbersUptoN(num);
console.log(result);
