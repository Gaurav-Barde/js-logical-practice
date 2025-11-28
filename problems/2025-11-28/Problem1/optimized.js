// 🧩 Problem: Find the maximum of three numbers
// Examples: input: 10,20,5 ====> 20

const input = [4, 4, 2];

const findMaximumOfThree = (a, b, c) => {
  if (a > b && a > c) {
    return a;
  } else {
    if (b > c) {
      return b;
    } else return c;
  }
};

const result = findMaximumOfThree(14, 12, 9);
console.log(result);
