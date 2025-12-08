// 🧩 Problem: Print Hollow Square Pattern
// Example: input = 5 ===>
// *****
// *   *
// *   *
// *   *
// *****

const rows = 6;

const printHollowSquarePattern = (rows) => {
  for (let i = 0; i < rows; i++) {
    if (i === 0 || i === rows - 1) {
      console.log("*".repeat(rows));
    } else console.log("*" + " ".repeat(rows - 2) + "*");
  }
};

const result = printHollowSquarePattern(rows);
