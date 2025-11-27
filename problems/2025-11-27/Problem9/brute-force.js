// 🧩 Problem: Print the cubes of numbers from 1 to N
// Examples: N = 5 ===> 1,8,27,64,125
const num = 5;
const printCubesOfNumbersUpToN = (n) => {
  if (Number(n)) {
    let result = [];
    for (let i = 1; i <= n; i++) {
      result.push(i ** 3);
    }
    return result;
  } else console.log("Given number is not a number");
};

const result = printCubesOfNumbersUpToN(num);
console.log(result);
