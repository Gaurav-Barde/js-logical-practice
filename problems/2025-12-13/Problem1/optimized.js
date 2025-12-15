// 🧩 Problem: Remove the decimal point mathematically
// eg. input = 12.34 => 1234

const num = 4.85856;

const removeDecimalPointMathematically = (num) => {
  let multiplier = 1;

  while (!Number.isInteger(num * multiplier)) {
    multiplier *= 10;
  }
  return num * multiplier;
};

const result = removeDecimalPointMathematically(num);
console.log(result);
