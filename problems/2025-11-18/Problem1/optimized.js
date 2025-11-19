const arr = [4, 7, 2, 7, 9, 4, 1, 2, 8, 7, 4, 3];

const findAndPrintDuplicate = (arr) => {
  const count = {};

  for (let item of arr) {
    count[item] = (count[item] || 0) + 1;
  }

  const duplicates = Object.entries(count)
    .filter(([_, count]) => count > 1)
    .reduce((acc, curr) => {
      acc[curr[0]] = curr[1];
      return acc;
    }, {});

  for (let item of Object.entries(duplicates)) {
    console.log(`count of ${item[0]}: is ====> : ${item[1]} `);
  }
};

const result = findAndPrintDuplicate(arr);
