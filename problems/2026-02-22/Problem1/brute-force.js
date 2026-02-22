// 🧩 Problem: Find HCF and LCM of three numbers
// Input: 8,12,16
// output: HCF = 4, LCM = 48

const numArray = [8, 16, 32];

const HCFAndLCMOfThreeNumber = (numArray) => {
  const [num1, num2, num3] = numArray;
  let lowest = num1 < num2 && num1 < num3 ? num1 : num2 < num3 ? num2 : num3;
  let highest = num1 > num2 && num1 > num3 ? num1 : num2 > num3 ? num2 : num3;
  let middle =
    num1 !== lowest && num1 !== highest
      ? num1
      : num2 !== lowest && num2 !== highest
      ? num2
      : num3;

  let hcf = 1;
  let lcm = 1;
  let temp = lowest / 2;

  if (highest % lowest === 0 && middle % lowest === 0) {
    hcf = lowest;
  } else {
    while (temp > 0) {
      if (num2 % temp === 0 && num3 % temp === 0) {
        hcf = temp;
        break;
      }
      temp--;
    }
  }

  let temp2 = highest * 2;

  if (highest % middle === 0 && highest % lowest === 0) {
    lcm = highest;
  } else {
    while (temp2 > 0) {
      if (temp2 % middle === 0 && temp2 % lowest === 0) {
        lcm = temp2;
        break;
      }
      temp2++;
    }
  }

  return { hcf, lcm };
};
const result = HCFAndLCMOfThreeNumber(numArray);
console.log(result);
