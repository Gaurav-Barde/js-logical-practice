// 🧩 Problem: Check if a given Number is an Automorphic Number
// Examples: N = 25
// output: true
// reason: 25 * 25 = 625 ==> 625 ends with 25

const num = 890625;

const isAutomorphicNumber = (num) => {
  const square = num * num;
  let multiplier = 0;
  let temp = square;

  while (temp > 10 && temp > num) {
    multiplier++;
    temp /= 10;
  }

  return num === square % 10 ** multiplier;
};

const result = isAutomorphicNumber(num);
console.log(result);
