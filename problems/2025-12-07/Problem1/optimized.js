// 🧩 Problem: Print Inverted Pyramid Pattern using * character
// Examples: input: Rows = 5 =>
// *********
//  *******
//   *****
//    ***
//     *

const rows = 6;

const printInvertedPyramidPattern = (rows) => {
  for (let i = rows; i >= 1; i--) {
    console.log(" ".repeat(rows - i) + "*".repeat(i * 2 - 1));
  }
};

const result = printInvertedPyramidPattern(rows);
