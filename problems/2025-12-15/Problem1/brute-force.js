// 🧩 Problem: Separate whole and fractional part of a Number
// eg. input = 12.34 => whole = 12, fraction = 0.34

const num = -12.34;

const separateWholeAndFraction = (num) => {
  if (Number.isInteger(num)) return num;

  const fractional = +(num % 1).toFixed(10);
  const whole = num - (num % 1);
  return { whole, fractional };
};

const result = separateWholeAndFraction(num);
console.log(result);
