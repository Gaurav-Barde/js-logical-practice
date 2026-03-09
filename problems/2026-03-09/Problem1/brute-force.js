// 🧩 Problem: Check if two numbers are Co-Prime
// Input: (7,8)
// output: Co-Prime
// Reason: since 7 & 8 are not divisible by any common factor

const a = 3, b=10;

const isCoPrime = (a, b) => {
  const largest = a > b ? a : b;
  let temp = Math.floor(largest / 2);

  while(temp > 1){
    if(a % temp === 0 && b % temp === 0){
      return false;
    }

    temp--;

  }

  return true;

};
const result = isCoPrime(a, b);
console.log(result);