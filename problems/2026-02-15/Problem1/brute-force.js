// 🧩 Problem: Find the LCM (Least Common Multiple) of Two Numbers
// Input: 12, 18
// output: LCM = 36
// Reason: 36 is the least number which is divisible by 12 & 18

const num1 = 12,
  num2 = 18;

const findLCMOfTwoNumbers = (num1, num2) => {
  let highest = num1 > num2 ? num1 : num2;
  let lowest = num1 === highest ? num2 : num1;

  if (highest % lowest === 0) {
    return highest;
  }

  let multiplier = 2;

  while ((highest * multiplier) % lowest !== 0) {
    multiplier++;
  }

  return highest * multiplier;
};

const result = findLCMOfTwoNumbers(num1, num2);
console.log(result);
