// 🧩 Problem: Generate a Decimal Number from Whole and Fractional Digits
// eg. input: Whole = [1,2], Fraction=[3,4]
// Output: 12.34

const whole = [1, 2];
const fraction = [3, 4];

const generateDecimalFromWholeAndFraction = (whole, fraction) => {
  let powWhole = 0;
  let wholePart = 0;
  for (let i = whole.length - 1; i > -1; i--) {
    let current = whole[i];
    while (current > 9) {
      let reminder = current % 10;
      wholePart += reminder * 10 ** powWhole;
      powWhole++;
      current = (current - reminder) / 10;
    }
    wholePart += current * 10 ** powWhole;
    powWhole++;
  }

  let powFra = -1;
  let fractionPart = 0;
  for (let i = 0; i < fraction.length; i++) {
    let current = fraction[i];
    while (current > 9) {
      let reminder = Math.floor(current / 10);
      fractionPart += reminder * 10 ** powFra;
      powFra--;
      current = current % 10;
    }
    fractionPart += current * 10 ** powFra;
    powFra--;
  }

  return wholePart + fractionPart;
};

const result = generateDecimalFromWholeAndFraction(whole, fraction);
console.log(result);
