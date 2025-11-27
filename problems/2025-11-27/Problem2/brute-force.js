// 🧩 Problem: Print all even numbers from 1 to N
// Examples: N = 10 ===> 2,4,6,8,10

const printEvenNumbersOneToN = (n) => {
  if (Number(n)) {
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
    return;
  }
  console.log("Given number is not a number");
};

const result = printEvenNumbersOneToN(10);
