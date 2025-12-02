// 🧩 Problem: Check if a year is a Leap Year
// Examples: input: 2024 ====> Leap Year

const year = 12;

const CheckLeapYear = (year) => {
  if (year % 400 === 0) {
    return year + " is a Leap year";
  } else if (year % 100 === 0) {
    return year + " is not a Leap year";
  } else if (year % 4 === 0) {
    return year + " is a Leap year";
  }
  return year + " is not a Leap year";
};

const result = CheckLeapYear(year);
console.log(result);
