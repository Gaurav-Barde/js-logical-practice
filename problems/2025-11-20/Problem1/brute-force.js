// 🧩 Problem: countVowels(s) returns how many vowels (a,e,i,o,u, case-insensitive) appear in string s.
// Examples: countVowels("Hello") -> 2, countVowels("xyz") -> 0

const string = "Hello";

const countVowels = (string) => {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let item of string) {
    for (let i of vowels) {
      if (item.toLowerCase() === i) count++;
    }
  }

  return count;
};

const result = countVowels(string);
