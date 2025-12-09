// 🧩 Problem: Print Alternating Binary Triangle
// Example: rows = 5 ===>
// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

const rows = 6;

const printAlternatingBinaryTriangle = (rows) => {
  let current = "1";

  for (let i = 0; i < rows; i++) {
    console.log(current);
    current = (i % 2 === 0 ? "0 " : "1 ") + current;
  }
};

const result = printAlternatingBinaryTriangle(rows);
