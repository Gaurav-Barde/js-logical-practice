// 🧩 Problem: Calculate electricity bill
// Logic: ◦ 0-100 units ===> ₹5 Per unit  ◦ 101-200 units ===> ₹7 Per unit  ◦ 201-300 units ===> ₹9 Per unit  ◦ above 300 units ===> ₹12 Per unit
// Example: Units = 230 Total Bill = 500 + 700 + 270 = 1470

const input = 250;
const calculateBelowHundred = (units) => units * 5;
const calculateAboveHundred = (units) => units * 7;
const calculateAboveTwoHundred = (units) => units * 9;
const calculateAboveThreeHundred = (units) => units * 12;

const calculateElectricityBill = (units) => {
  let totalBill = units;
  if (totalBill < 100) {
    totalBill = calculateBelowHundred(units);
  } else if (totalBill > 100 && totalBill <= 200) {
    totalBill =
      calculateAboveHundred(totalBill - 100) + calculateBelowHundred(100);
  } else if (totalBill > 200 && totalBill <= 300) {
    totalBill =
      calculateAboveTwoHundred(totalBill - 200) +
      calculateAboveHundred(100) +
      calculateBelowHundred(100);
  } else if (totalBill > 300) {
    totalBill =
      calculateAboveThreeHundred(totalBill - 300) +
      calculateAboveTwoHundred(100) +
      calculateAboveHundred(100) +
      calculateBelowHundred(100);
  }

  return totalBill;
};

const result = calculateElectricityBill(input);
console.log(result);
