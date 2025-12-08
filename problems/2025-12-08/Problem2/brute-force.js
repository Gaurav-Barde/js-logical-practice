// 🧩 Problem: Print Hollow Pyramid Pattern
// Example: input = 5 ===>
//     *
//    * *
//   *   *
//  *     *
// *********

const rows = 6;

const printHollowPyramidPattern = (rows) => {
  const width = rows * 2 - 1;
  const median = Math.floor(width / 2);

  for (let i = 0; i < rows; i++) {
    if (i === rows - 1) {
      console.log("*".repeat(width));
    } else {
      const arr = Array(width).fill(" ");
      arr[median - i] = "*";
      arr[median + i] = "*";
      console.log(arr.join(""));
    }
  }
};

const result = printHollowPyramidPattern(rows);
