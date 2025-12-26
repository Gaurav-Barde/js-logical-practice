// 🧩 Problem: Check if a Number is a Palindrome
// eg. input: 121 ==> Palindrome
/// eg. input: 124 ==> Not a Palindrome

const number = 1222222241;

const isPalindrome = (number) => {
  let reversedNumberArr = [];
  let reversedNumber = 0;
  let temp = number;

  while (temp >= 10) {
    reversedNumberArr.push(temp % 10);
    temp = Math.floor(temp / 10);
  }
  reversedNumberArr.push(temp);

  let digit = reversedNumberArr.length - 1;
  for (let i = 0; i < reversedNumberArr.length; i++) {
    reversedNumber += reversedNumberArr[i] * 10 ** digit;
    digit--;
  }
  if (number === reversedNumber) return "Given Number is a Palindrome";

  return "Given Number is not a Palindrome";
};

console.log(isPalindrome(number));
