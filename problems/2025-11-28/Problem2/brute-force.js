// 🧩 Problem: Check if a give number is positive, negative or zero
// Examples: 5 ====> positive, -15 ====> negative, 0 ====> zero,

const input = 0;

const checkNumberPvNvZero = (number) => {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else return "Zero";
};

const result = checkNumberPvNvZero(input);
console.log(result);
