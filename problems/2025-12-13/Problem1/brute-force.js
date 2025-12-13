// 🧩 Problem: Remove the decimal point mathematically
// eg. input = 12.34 => 1234

const num = 2.464558;

const removeDecimalPointMathematically = (num) => {
  let pow = 0;
  let total;
  while (total % 1 !== 0) {
    total = num * Math.pow(10, pow);
    pow += 1;
  }
  return total;
};

const result = removeDecimalPointMathematically(num);
console.log(result);
