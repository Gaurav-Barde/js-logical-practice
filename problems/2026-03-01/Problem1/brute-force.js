// 🧩 Problem: Check if a number is Prime
// Input: 7
// output: true
// Reason: since 7 is only divisible by 1 and itself

const num = 13;

const isPrime = (num) => {
  if (!Number.isInteger(num) || num < 1) {
    alert("Not a valid number, Please enter a natural number");
    return;
  }

  let half = Math.floor(num / 2);

  for (let i = half; i >= 1; i--) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
const result = isPrime(num);
console.log(result);
