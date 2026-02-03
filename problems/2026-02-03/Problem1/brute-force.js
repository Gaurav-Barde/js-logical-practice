// 🧩 Problem: Find the HCF (Highest Common Factor) or GCD of Two Numbers
// Input: 12, 18
// output: HCF = 6
// Reason: common factors of 12 & 18 are: 1, 2, 3, 6 out of which 6 is the highest

const num1 = 12,
  num2 = 18;

const findHCFOfTwoNumbers = (num1, num2) => {
  const commonFactors = [];
  let temp = 1;
  while (temp < num2) {
    if (num1 % temp === 0 && num2 % temp === 0) {
      commonFactors.push(temp);
    }
    temp++;
  }
  return commonFactors[commonFactors.length - 1];
};

const result = findHCFOfTwoNumbers(num1, num2);
console.log(result);
