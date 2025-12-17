// 🧩 Problem: Generate a Decimal Number from Whole and Fractional Digits
// eg. input: Whole = [1,2], Fraction=[3,4]
// Output: 12.34

const whole = [112, 22, 33, 888];
const fraction = [3, 4, 8, 9, 8, 9];
const generateDecimalFromWholeAndFraction = (whole, fraction) => {
  let wholePart = 0;

  for (const n of whole) {
    let digits = 1;
    let temp = n;

    while (temp >= 10) {
      temp /= 10;
      digits++;
    }

    wholePart = wholePart * 10 ** digits + n;
  }

  let fractionPart = 0;
  for (const d of fraction) {
    fractionPart = fractionPart * 10 + d;
  }

  return wholePart + fractionPart / 10 ** fraction.length;
};

const result = generateDecimalFromWholeAndFraction(whole, fraction);
console.log(result);
