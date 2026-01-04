// 🧩 Problem: Reverse all the characters of a string without changing the word positions
// Examples: input: Time of India
// output: emiT fo aidnI

const string = "Times of India";

const reverseTheCharactersOfString = (str) =>
  str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");

const result = reverseTheCharactersOfString(string);
console.log(result);
