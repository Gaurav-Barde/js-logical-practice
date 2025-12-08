// 🧩 Problem: Print Inverted Pyramid Pattern using * character
// Examples: input: Rows = 5 =>
// *********
//  *******
//   *****
//    ***
//     *

const rows = 6;

const printInvertedPyramidPattern = (rows) => {
  const width = rows * 2 - 1;
  let arr = Array(width).fill("*");
  for (let i = 0; i < rows; i++) {
    arr[i - 1] = " ";
    arr[width - i] = " ";
    console.log(arr.join(""));
  }
};

const result = printInvertedPyramidPattern(rows);
