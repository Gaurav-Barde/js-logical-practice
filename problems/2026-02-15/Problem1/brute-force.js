// 🧩 Problem: Find the LCM (Least Common Multiple) of Two Numbers
// Input: 12, 18
// output: LCM = 36

const num1 = 12,
  num2 = 18;

const findLCMOfTwoNumbers = (num1, num2) => {
  let temp = num;
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
