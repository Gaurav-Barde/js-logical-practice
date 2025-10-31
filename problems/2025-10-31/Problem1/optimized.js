const string1 = "badcharacter",
  string2 = "character";

const findLongestCommonEnding = (string1, string2) => {
  if (!string1 || !string2) return "";
  let i = string1.length - 1;
  let j = string2.length - 1;
  let result = "";

  while (i >= 0 && j >= 0 && string1[i] === string2[j]) {
    result = string1[i] + result;
    i--;
    j--;
  }

  return result;
};

const result = findLongestCommonEnding(string1, string2);
