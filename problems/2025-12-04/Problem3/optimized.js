// 🧩 Problem: Print Pyramid Pattern using * character
// Examples: input: Rows = 5 =>
//      *
//    * * *
//   * * * * *
//  * * * * * * *
// * * * * * * * * *

const rows = 6;

const printPyramidPattern = (rows) => {
  const width = rows * 2 - 1;
  const arr = Array(width).fill(" ");
  const mid = Math.floor(width / 2);

  for (let i = 0; i < rows; i++) {
    arr[mid + i] = "*";
    arr[mid - i] = "*";
    console.log(arr.join(""));
  }
};

const result = printPyramidPattern(rows);
