// 🧩 Problem: Find the frequency of each digit
// Examples: N = 112233
// output: 1 ==> 2, 2 ==> 2, 3 ==> 2

let num = 11223444443;

const findTheFrequencyOfDigit = (num) => {
  const freq = Array(10).fill(0);

  if (num === 0) {
    freq[0] = 1;
    return freq;
  }

  if (num < 0) num = -num;

  while (num > 0) {
    const d = num % 10;
    freq[d]++;
    num = (num - d) / 10;
  }

  return freq;
};

const result = findTheFrequencyOfDigit(num);
console.log(result);
