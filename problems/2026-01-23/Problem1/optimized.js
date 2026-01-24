// 🧩 Problem: Check if a given Number is an Automorphic Number
// Examples: N = 25
// output: true
// reason: 25 * 25 = 625 ==> 625 ends with 25

const num = 890625;

const isAutomorphicNumber = (num) => {
  if (num < 0) return false;

  let square = num * num;
  let temp = num;
  let power = 1;

  // Find 10^digits(num)
  while (temp > 0) {
    power *= 10;
    temp = (temp - (temp % 10)) / 10;
  }

  return square % power === num;
};

const result = isAutomorphicNumber(num);
console.log(result);
