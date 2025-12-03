// 🧩 Problem: check type of a given character(Uppercase, Lowercase, Digit or Special Character)
// Examples: input: A ===> Uppercase Letter, a ===> Lowercase Letter, 9 ===> Digit

const input = "10";

const checkCharType = (char) => {
  if (char && typeof char === "string") {
    if (char.charCodeAt() > 64 && char.charCodeAt() < 91) {
      return "Uppercase Letter";
    } else if (char.charCodeAt() > 96 && char.charCodeAt() < 123) {
      return "Lowercase Letter";
    } else if (char.charCodeAt() > 47 && char.charCodeAt() < 58) {
      return "Digit";
    } else return "Special Character";
  }
  return "Empty or Invalid character";
};

const result = checkCharType(input);
console.log(result);
