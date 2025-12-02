// 🧩 Problem: Check if a year is a Leap Year
// Examples: input: 2024 ====> Leap Year

const year = 3960;

const CheckLeapYear = (year) => {
  if (year < 100 && year % 4 === 0) {
    return "Leap Year";
  } else if (
    year >= 100 &&
    year % 4 === 0 &&
    (year % 100 !== 0 || year % 400 === 0)
  ) {
    return "Leap Year";
  }
  return "Not a Leap Year";
};

const result = CheckLeapYear(year);
console.log(result);
