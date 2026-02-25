// 🧩 Problem: Find HCF and LCM of three numbers
// Input: 8,12,16
// output: HCF = 4, LCM = 48

const numArray = [8, 16, 32];

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b);

const HCFAndLCM = (arr) => {
  const hcf = arr.reduce((acc, val) => gcd(acc, val));
  const lcmValue = arr.reduce((acc, val) => lcm(acc, val));

  return { hcf, lcm: lcmValue };
};
const result = HCFAndLCMOfThreeNumber(numArray);
console.log(result);
