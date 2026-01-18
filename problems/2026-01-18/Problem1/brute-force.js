// 🧩 Problem: Find the Average of Digits
// Examples: N = 4567
// output: Average = 5.5
// reason: 4 + 5 + 6 + 7 = 22 / 4 ==> 5.5

const num = 4567;

const averageOfDigits = (num) => {
  if (num < 0) {
    return false;
  }

  let sum = 0;
  let digitsCount = 0;
  let temp = num;

  while (temp > 0) {
    sum += temp % 10;
    digitsCount++;
    temp = (temp - (temp % 10)) / 10;
  }
  return sum / digitsCount;
};

const result = averageOfDigits(5);
console.log(result);
