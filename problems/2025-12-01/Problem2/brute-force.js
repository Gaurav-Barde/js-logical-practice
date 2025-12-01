// 🧩 Problem: Check if a given character is Vowel or Consonant
// Examples: input: "e" ====> Vowel

const vowels = ["a", "e", "i", "o", "u"];

const char = "10";

const checkVowelOrConsonant = (char) => {
  if (typeof char !== "string" || !/^[a-zA-Z]$/.test(char)) {
    return "Not a valid letter!";
  }

  for (let item of vowels) {
    if (item === char) {
      return "Given character is a Vowel";
    }
  }
  return "Given character is a Consonant";
};

const result = checkVowelOrConsonant(char);
console.log(result);
