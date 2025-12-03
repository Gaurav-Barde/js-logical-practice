// 🧩 Problem: check type of a given character(Uppercase, Lowercase, Digit or Special Character)
// Examples: input: A ===> Uppercase Letter, a ===> Lowercase Letter, 9 ===> Digit

const input = "10";

const checkCharType = (char) => {
  if (!char || typeof char !== "string" || char.length !== 1) {
    return "Empty or invalid character";
  }
  const code = char.charCodeAt(0);
  if (code >= 48 && code <= 57) return "Digit";
  else if (code >= 65 && code <= 90) return "Uppercase Letter";
  else if (code >= 97 && code <= 122) return "Lowercase Letter";
  else return "Special Character";
};

const result = checkCharType(input);
console.log(result);
