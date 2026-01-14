// 🧩 Problem: Check if a Number is an Armstrong Number
// Examples: N = 153
// output: output= Armstrong Number
// reason: 1 * 1 * 1 + 5 * 5 * 5 + 3 * 3 * 3

const num = 1634;

const checkArmstrongNumber = (num) => {
  const digits = [];
  let temp = num;
  while (temp > 0) {
    digits.push(temp % 10);
    temp = (temp - (temp % 10)) / 10;
  }

  let sum = 0;

  for (let digit of digits) {
    sum += digit ** digits.length;
  }

  if (sum === num) {
    return "Given Number is an Armstrong Number";
  }

  return "Given Number is not an Armstrong Number";
};

const result = checkArmstrongNumber(num);
console.log(result);
