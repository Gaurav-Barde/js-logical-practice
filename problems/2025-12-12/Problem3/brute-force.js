// 🧩 Problem: Reverse given number without using string methods
// eg. 1234 ===> 4321

const num = 2465;

const reverseNumber = (num) => {
  const resultArr = [];
  while (num > 0) {
    resultArr.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  console.log(resultArr);

  let reversedNum = 0;
  for (index in resultArr) {
    reversedNum += resultArr[index] * Math.pow(10, index);
  }
  return reversedNum;
};

const result = reverseNumber(num);
console.log(result);
