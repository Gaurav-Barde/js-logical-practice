// 🧩 Problem: Print Right-Angled Triangle using * character
// Examples: input: Rows = 5 => *
//    * *
//    * * *
//    * * * *
//    * * * * *

const rows = 10;

const printRightAngledTriangle = (rows) => {
  for (let i = 1; i <= rows; i++) {
    console.log("*".repeat(i));
  }
};

const result = printRightAngledTriangle(rows);
