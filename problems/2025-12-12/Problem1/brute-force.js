// 🧩 Problem: If given an array of [2,4,6,5] print digits to number using mathematical formula
// eg. [2,4,6,5] => 5642

const arr = [2, 4, 6, 5];

const printReversedNumberUsingFormula = (arr) => {
  let digit = 0;

  for (index in arr) {
    digit += Math.pow(10, index) * arr[index];
  }
  return digit;
};

const result = printReversedNumberUsingFormula(arr);
console.log(result);
