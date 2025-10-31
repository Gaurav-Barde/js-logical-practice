// Write a function to find the longest common ending in two strings.
// eg. str1 = "programming" str2 = "gaming" expected output = "ming"

const string1 = "programming",
  string2 = "gaming";

const findLongestCommonEnding = (string1, string2) => {
  const string1Reversed = string1.split("").reverse();
  const string2Reversed = string2.split("").reverse();
  const resultArr = [];
  for (let i in string1Reversed) {
    if (string1Reversed[i] && string2Reversed[i]) {
      if (string1Reversed[i] == string2Reversed[i]) {
        resultArr.push(string1Reversed[i]);
      }
    }
  }

  return resultArr.reverse().join("");
};

const result = findLongestCommonEnding(string1, string2);
