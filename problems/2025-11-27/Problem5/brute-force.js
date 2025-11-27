// 🧩 Problem: Print sum of all even numbers upto N
// Examples: N = 5 ===> 2+4 = 6
console.time();
const num = 14;

const sumOfEvenNumbersUptoN = (n) => {
  if (Number(n)) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 0) {
        sum += i;
      }
    }
    return sum;
  } else console.log("Given number is not a number");
};

const result = sumOfEvenNumbersUptoN(num);
console.log(result);

console.timeEnd();
