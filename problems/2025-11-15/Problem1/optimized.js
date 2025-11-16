const findMissingNumbers = (arr) => {
  if (!Array.isArray(arr) || arr.length < 2) return [];

  // Step 1: Remove duplicates & sort ascending
  const sorted = [...new Set(arr)].sort((a, b) => a - b);

  const missing = [];

  // Step 2: Compare consecutive numbers
  for (let i = 0; i < sorted.length - 1; i++) {
    const current = sorted[i];
    const next = sorted[i + 1];

    // If gap > 1, fill in missing numbers
    if (next - current > 1) {
      for (let n = current + 1; n < next; n++) {
        missing.push(n);
      }
    }
  }

  return missing;
};

const arr = [10, 15, 25, 13, 19, 15];
console.log(findMissingNumbers(arr));
// ✅ Output: [11, 12, 14, 16, 17, 18, 20, 21, 22, 23, 24]
