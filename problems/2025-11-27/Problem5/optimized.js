// 🧩 Problem: Print sum of all even numbers upto N
// Examples: N = 5 ===> 2+4 = 6
console.time();
const num = 11;

const sumOfEvenNumbersUptoN = (n) => {
  if (Number(n)) {
    let sum = 0;
    if (n % 2 === 0) {
      sum = (n / 2) * (n / 2 + 1);
      return sum;
    } else return sumOfEvenNumbersUptoN(n - 1);
  } else console.log("Given number is not a number");
};

const result = sumOfEvenNumbersUptoN(num);
console.log(result);

console.timeEnd();
