// 🧩 Problem: Find missing numbers between first and last elements of an array

const arr = [10, 15, 25, 13, 19, 15];

const findMissingNumber = (inputArr) => {
  const missingNumbersArr = [];
  const result = [];

  inputArr.forEach(
    (_, i) =>
      inputArr[i + 1] - inputArr[i] > 1 &&
      missingNumbersArr.push([inputArr[i], inputArr[i + 1]])
  );
  missingNumbersArr.map((item) => {
    let first = item[0],
      second = item[1];
    for (let i = first + 1; i < second; i++) {
      if (!result.includes(i) && !inputArr.includes(i)) {
        result.push(i);
      }
    }
  });
  return result;
};

const result = findMissingNumber(arr);

console.log(result);
