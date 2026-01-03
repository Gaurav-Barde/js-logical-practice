// 🧩 Problem: Reverse all the characters of a string without changing the word positions
// Examples: input: Time of India
// output: emiT fo aidnI

const string = "Times of India";

const reverseTheCharactersOfString = (string) => {
  const stringArr = string.split(" ");

  for (let item in stringArr) {
    stringArr[item] = stringArr[item].split("").reverse().join("");
  }

  return stringArr.join(" ");
};

const result = reverseTheCharactersOfString(string);
console.log(result);
