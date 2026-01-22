// 🧩 Problem: Check if a given Number is a Strong Number
// Examples: N = 145
// output: true
// reason: 1! + 4! + 5! ==> 1 + 24 + 120 ==> 145

const num = 40585;

const isStrongNumber = (num) => {
  const f = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
  let sum = 0,
    n = num;

  while (n > 0) {
    sum += f[n % 10];
    if (sum > num) return false;
    n = (n - (n % 10)) / 10;
  }

  return sum === num;
};

const result = isStrongNumber(num);
console.log(result);
