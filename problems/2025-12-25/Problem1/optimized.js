// 🧩 Problem: Check if a Number is a Palindrome
// eg. input: 121 ==> Palindrome
/// eg. input: 124 ==> Not a Palindrome

const number = 1222222241;

const isPalindrome = (number) => {
  if (number < 0) return false;

  let original = number;
  let reversed = 0;

  while (number > 0) {
    reversed = reversed * 10 + (number % 10);
    number = Math.floor(number / 10);
  }

  return original === reversed;
};

console.log(isPalindrome(number));
