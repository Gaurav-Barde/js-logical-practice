// 🧩 Problem: Print Pyramid Pattern using * character
// Examples: input: Rows = 5 =>
//      *
//    * * *
//   * * * * *
//  * * * * * * *
// * * * * * * * * *

const rows = 6;

const printPyramidPattern = (rows) => {
  const rowsDoubleIndex = rows * 2 - 1;
  const arr = Array(rowsDoubleIndex).fill(" ", 0, rowsDoubleIndex);
  const median = Math.floor(rowsDoubleIndex / 2);
  arr.splice(median, 1, "*");
  console.log(arr.join(""));

  for (let i = 1; i < rows; i++) {
    arr.splice(median + i, 1, "*");
    arr.splice(median - i, 1, "*");
    console.log(arr.join(""));
  }
};

const result = printPyramidPattern(rows);
