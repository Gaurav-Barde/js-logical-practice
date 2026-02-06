// 🧩 Problem: Print All Multiples of a Number up to N
// Input: N = 4, Limit = 30
// output: [4, 8, 12, 16, 20, 24, 28]

const num = 4,
  limit = 30;

const printAllMultiplesUpToLimit = (num, limit) => {
  if (num <= 0 || limit <= 0) return [];

  const multiples = [];

  for (let value = num; value < limit; value += num) {
    multiples.push(value);
  }

  return multiples;
};

const result = printAllMultiplesUpToLimit(num, limit);
console.log(result);
