// 🧩 Problem: Print Diamond Pattern
// Example: rows = 3 ===>
//   *
//  ***
// *****
//  ***
//   *

const rows = 6;

const printDiamondPattern = (rows) => {
  const width = rows * 2 - 1;
  const median = Math.floor(width / 2);
  const arr = Array(width).fill(" ");

  for (let i = 0; i < width; i++) {
    if (i >= rows) {
      arr[i - rows] = " ";
      arr[width - (i - rows) - 1] = " ";
    } else {
      arr[median + i] = "*";
      arr[median - i] = "*";
    }
    console.log(arr.join(""));
  }
};

const result = printDiamondPattern(rows);
