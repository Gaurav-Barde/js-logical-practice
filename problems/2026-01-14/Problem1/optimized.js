// 🧩 Problem: Check if a Number is an Armstrong Number
// Examples: N = 153
// output: output= Armstrong Number
// reason: 1 * 1 * 1 + 5 * 5 * 5 + 3 * 3 * 3

const num = 1634;

const isArmstrongNumber = (num) => {
  if (num < 0) return false;

  let temp = num;
  let digits = 0;

  // Count digits
  while (temp > 0) {
    digits++;
    temp = (temp - (temp % 10)) / 10;
  }

  temp = num;
  let sum = 0;

  // Calculate Armstrong sum
  while (temp > 0) {
    const digit = temp % 10;
    sum += digit ** digits;
    temp = (temp - digit) / 10;
  }

  return sum === num;
};

const result = isArmstrongNumber(num);
console.log(result);
