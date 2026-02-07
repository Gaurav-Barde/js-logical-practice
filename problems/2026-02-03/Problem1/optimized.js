// 🧩 Problem: Find the HCF (Highest Common Factor) or GCD of Two Numbers
// Input: 12, 18
// output: HCF = 6
// Reason: common factors of 12 & 18 are: 1, 2, 3, 6 out of which 6 is the highest

const num1 = 12,
  num2 = 18;

const findHCFOfTwoNumbers = (a, b) => {
  if (a === 0) return b;
  if (b === 0) return a;

  a = a < 0 ? -a : a;
  b = b < 0 ? -b : b;

  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
};

const result = findHCFOfTwoNumbers(num1, num2);
console.log(result);
