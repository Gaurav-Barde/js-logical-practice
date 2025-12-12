// 🧩 Problem: Split a given number into digits
// eg. 2465 ===> [2,4,6,5]

const num = 2465;

const splitNumToDigits = (num) => {
  const resultArr = [];

  // console.log(Math.floor(1 / 2));
  while (num > 0) {
    resultArr.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  return resultArr;
};

const result = splitNumToDigits(num);
console.log(result);
