// 🧩 Problem: Check if a number is Prime
// Input: 7
// output: true
// Reason: since 7 is only divisible by 1 and itself

const num = 13;

const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};
const result = isPrime(num);
console.log(result);
