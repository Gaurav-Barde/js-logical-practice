// 🧩 Problem: Print inverted Right-Angled Triangle using * character
// Examples: input: Rows = 5 =>
//    * * * * *
//    * * * *
//    * * *
//    * *
//    *

const rows = 10;

const printInvertedRightAngledTriangle = (rows) => {
  for (let i = rows; i >= 1; i--) {
    console.log("*".repeat(i));
  }
};

const result = printInvertedRightAngledTriangle(rows);
