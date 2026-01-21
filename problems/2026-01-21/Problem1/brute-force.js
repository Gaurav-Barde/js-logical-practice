// 🧩 Problem: Check if a given Number is a Strong Number
// Examples: N = 145
// output: true
// reason: 1! + 4! + 5! ==> 1 + 24 + 120 ==> 145

const num = 40585;

const isStrongNumber = (num) => {
  const digits = [];
  let temp = num;

  while (temp > 0) {
    digits.unshift(temp % 10);
    temp = (temp - (temp % 10)) / 10;
  }
  let sum = 0;
  for (item of digits) {
    let innerSum = 1;
    let temp = item;
    while (temp > 1) {
      innerSum *= temp;
      temp--;
    }
    sum += innerSum;
  }

  return sum === num;
};

const result = isStrongNumber(num);
console.log(result);
