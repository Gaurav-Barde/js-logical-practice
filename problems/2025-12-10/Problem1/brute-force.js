// 🧩 Problem: Print Butterfly Pattern
// Example: rows = 5 ===>
// *        *
// **      **
// ***    ***
// ****  ****
// **********
// ****  ****
// ***    ***
// **      **
// *        *

const rows = 8;

const printButterflyPattern = (rows) => {
  const width = rows * 2 - 1;
  const arr = Array(width).fill(" ");

  for (let i = 0; i < width; i++) {
    if (i >= rows) {
      arr[width - i] = " ";
      arr[i] = " ";
      console.log(arr.join(""));
      continue;
    }
    arr[i] = "*";
    arr[width - i] = "*";
    console.log(arr.join(""));
  }
};

const result = printButterflyPattern(rows);
