// 🧩 Problem: Print only the numbers that are both even and perfect squares upto N
// Example: 20 ====> 4,16
const num = 20;
const printEvenAndSquaresUpToN = (n) => {
  if (Number(n)) {
    let result = [];
    for (let i = 1; i <= n; i++) {
      if (Math.pow(i, 2) % 2 === 0 && Math.pow(i, 2) < n) {
        result.push(Math.pow(i, 2));
      }
    }
    return result;
  } else console.log("Given number is not a number");
};

const result = printEvenAndSquaresUpToN(num);
console.log(result);
