// 🧩 Problem: Print Product(factorial) of N
// Examples: N = 5 ===> 1*2*3*4*5 = 1200
const num = 10002n;

const factorialOfN = (n) => {
  if (Number(n)) {
    if (n < 10001) {
      let product = 1n;
      for (let i = 1n; i <= n; i++) {
        product *= i;
      }
      return product;
    } else console.log("Please provide a number less than 1000");
  } else console.log("Given number is not a number");
};

const result = factorialOfN(num);
console.log(result);
