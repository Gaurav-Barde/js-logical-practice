// 🧩 Problem: Return the first two highest occurrence of repeated elements in a given array
// Examples: const arr = [1,1,1,4,2,2,2,3,5,2];
// output: output= [2: 4, 1: 3]

const arr = [1,1,1,4,2,2,2,3,5,2];

const return = (string) => {
  const stringArr = string.split(" ");

  for (let item in stringArr) {
    stringArr[item] = stringArr[item].split("").reverse().join("");
  }

  return stringArr.join(" ");
};

const result = reverseTheCharactersOfString(string);
console.log(result);
