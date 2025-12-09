// 🧩 Problem: Print Hollow Pyramid Pattern
// Example: input = 5 ===>
//     *
//    * *
//   *   *
//  *     *
// *********

const rows = 6;

const printHollowPyramidPattern = (rows) => {
  for (let i = 0; i < rows; i++) {
    if (i === rows - 1) {
      console.log("*".repeat(rows * 2 - 1));
      continue;
    }
    console.log(
      " ".repeat(rows - i - 1) +
        "*" +
        (i > 0 ? " ".repeat(i * 2 - 1) + "*" : "")
    );
  }
};

const result = printHollowPyramidPattern(rows);
