// 🧩 Problem: find the first non-repeating character in a given string
// Examples: input: "aabcjrdbc" ====> j

const string = "aabcjrdbc";

const findFirstNonRepeating = (string) => {
  const freq = {};
  for (let item of string) {
    freq[item] = (freq[item] || 0) + 1;
  }

  for (let item of string) {
    if (freq[item] === 1) return item;
  }

  return null;
};

const result = findFirstNonRepeating(string);
console.log(result);
