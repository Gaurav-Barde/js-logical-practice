// 🧩 Problem: Check if the two given strings are anagram
// eg. input: str1 = "apple" str2= "paple" ===> true
// eg. input: str1 = "appee" str2= "apple" ===> false

const str1 = "apple",
  str2 = "paele";

const checkAnagram = (str1, str2) => {
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  if (sortedStr1 === sortedStr2) {
    return true;
  }

  return false;
};

const result = checkAnagram(str1, str2);
console.log(result);
