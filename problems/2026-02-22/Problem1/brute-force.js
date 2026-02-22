// 🧩 Problem: Find HCF and LCM of three numbers
// Input: 8,12,16
// output: HCF = 4, LCM = 48

const numArray = [8, 12, 16];

const HCFAndLCMOfThreeNumber = (numArray) => {
  const [num1, num2, num3] = numArray;
  let lowest = num1 < num2 && num1 < num3 ? num1 : num2 < num3 ? num2 : num3;
  let highest = num1 > num2 && num1 > num3 ? num1 : num2 > num3 ? num2 : num3;

  let hcf = 1;
  let temp = lowest / 2;

  while (temp > 0) {
    if (num2 % temp === 0 && num3 % temp === 0) {
      hcf = temp;
    }
    temp--;
  }

  return hcf;
};
const result = HCFAndLCMOfThreeNumber(numArray);
console.log(result);
