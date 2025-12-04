// 🧩 Problem: Print Pyramid Pattern using * character
// Examples: input: Rows = 5 =>
//      *
//    * * *
//   * * * * *
//  * * * * * * *
// * * * * * * * * *

const rows = 6;

const printPyramidPattern = (rows) => {
  let arr = Array(rows * 2 - 1).fill(" ", 0, rows * 2 - 1);
  let median = Math.floor((rows * 2 - 1) / 2); //4
  arr.splice(median, 1, "*");
  console.log(arr.join(""));

  for (let i = 1; i < rows; i++) {
    arr.splice(median + i, 1, "*");
    arr.splice(median - i, 1, "*");
    console.log(arr.join(""));
  }
};

const result = printPyramidPattern(rows);
