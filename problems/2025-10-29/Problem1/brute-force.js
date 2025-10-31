// Breadcrumb Chain Problem
// Problem:
// Given the below breadcrumb array, generate the complete hierarchy starting from the root:
const breadCrumb = [
  { id: 3, parentId: 12, title: "Headphones" },
  { id: 19, parentId: 28, title: "True wireless" },
  { id: 28, parentId: 3, title: "Wired" },
  { id: 12, parentId: null, title: "Audio" },
  { id: null, parentId: 19, title: "Bluetooth" },
];
//   Expected Output: Audio >> Headphones >> Wired >> True wireless >> Bluetooth

const generateHierarchy = (inputArr) => {
  const resultArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    for (let k = 0; k < inputArr.length - 1; k++) {
      if (inputArr[i]?.parentId == inputArr[k]?.id) {
        if (!resultArr.includes(inputArr[k]))
          resultArr.push(inputArr[k], inputArr[i]);
      }
    }
    if (inputArr[i].id == null) {
      resultArr.push(inputArr[i]);
    }
  }

  return resultArr.map((item) => item.title).join(" >");
};

const result = generateHierarchy(breadCrumb);
