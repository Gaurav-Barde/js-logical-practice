// 🧩 Problem: Print All Multiples of a Number up to N
// Input: N = 4, Limit = 30
// output: [4, 8, 12, 16, 20, 24, 28]

const num = 4,
  limit = 30;

const printAllMultiplesUpToLimit = (num, limit) => {
  const multiplies = [];
  let multiplier = 1;

  while (num * multiplier < limit) {
    multiplies.push(num * multiplier);
    multiplier++;
  }

  return multiplies;
};

const result = printAllMultiplesUpToLimit(num, limit);
console.log(result);
