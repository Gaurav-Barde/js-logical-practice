// 🧩 Problem: Generate a Decimal Number from Whole and Fractional Digits
// eg. input: Whole = [1,2], Fraction=[3,4]
// Output: 12.34

const whole = [11, 22, 33, 88];
const fraction = [3, 4, 8, 9, 8, 9];

const generateDecimalFromWholeAndFraction = (whole, fraction) => {
  let pow = 0;
  let wholePart = 0;
  for (let i = whole.length - 1; i > -1; i--) {
    if (whole[i] > 10) {
      wholePart += (whole[i] % 10) * 10 ** pow;
      pow++;
      wholePart += Math.floor(whole[i] / 10) * 10 ** pow;
      pow++;
    } else {
      wholePart += whole[i] * 10 ** pow;
      pow++;
    }
  }

  let powFr = -1;
  let fractionPart = 0.0;
  for (let i = 0; i < fraction.length; i++) {
    fractionPart += fraction[i] * 10 ** powFr;
    powFr--;
  }
  fractionPart = +fractionPart.toFixed(fraction.length);
  return wholePart + fractionPart;
};

const result = generateDecimalFromWholeAndFraction(whole, fraction);
console.log(result);
