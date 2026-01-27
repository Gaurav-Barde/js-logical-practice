// 🧩 Problem: Find the frequency of each digit
// Examples: N = 112233
// output: 1 ==> 2, 2 ==> 2, 3 ==> 2

const findTheFrequencyOfDigit = (num) => {
  const digits = [];
  const frequency = {};

  let temp = num;

  while (temp > 0) {
    digits.unshift(temp % 10);
    temp = Math.floor(temp / 10);
  }

  for (let item of digits) {
    frequency[item] = (frequency[item] || 0) + 1;
  }

  Object.entries(frequency).forEach((item) =>
    console.log(item[0] + " ===> " + item[1])
  );
};

const result = findTheFrequencyOfDigit(11223444443);
