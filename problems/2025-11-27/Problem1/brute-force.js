// 🧩 Problem: Print numbers from 1 to N
// Examples: N = 5 ===> 1,2,3,4,5

const printNumbersOneToN = (n) => {
  if (Number(n)) {
    for (let i = 1; i <= n; i++) {
      console.log(i);
    }
    return;
  }
  console.log("Given number is not a number");
};

const result = printNumbersOneToN(10);
