// 🧩 Problem: Print Right-Angled Start Triangle
// Examples: input: Rows = 5 => *
//    * *
//    * * *
//    * * * *
//    * * * * *

const rows = 4;

const printRightAngledTriangle = (rows) => {
  let stars = "*";
  for (let i = 1; i <= rows; i++) {
    console.log(stars);
    stars += "*";
  }
};

const result = printRightAngledTriangle(rows);
