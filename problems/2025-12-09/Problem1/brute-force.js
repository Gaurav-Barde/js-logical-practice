// 🧩 Problem: Print Alternating Binary Triangle
// Example: rows = 5 ===>
// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1

const rows = 6;

const printAlternatingBinaryTriangle = (rows) => {
  let str = "1";
  let temp = "";
  for (let i = 0; i < rows; i++) {
    str = !temp ? str : temp + " " + str;
    console.log(str);
    temp = temp === "0" ? "1" : "0";
  }
};

const result = printAlternatingBinaryTriangle(rows);
