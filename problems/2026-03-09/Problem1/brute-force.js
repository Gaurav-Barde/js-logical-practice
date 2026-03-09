// 🧩 Problem: Check if two numbers are Co-Prime
// Input: (7,8)
// output: Co-Prime
// Reason: since 7 & 8 are not divisible by any common factor

const a = 7, b=8;

const isCoPrime = (a, b) => {
  const largest = a > b ? a : b;
  let half = Math.floor(largest / 2);

  while(half > 1){
    if(a % half === 0 && b % half === 0){
      return true;
    }

    half--;

  }

  return false;

};
const result = isCoPrime(num);
console.log(result);
