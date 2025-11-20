const string = "Hello";

const countVowels = (string) => {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  for (let char of string) {
    if (vowels.has(char)) count++;
  }
  return count;
};

const result = countVowels(string);
console.log(result);
