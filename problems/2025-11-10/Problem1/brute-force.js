// 🧩 Problem: Print the Depth of Each Property in a Nested Object
const obj = {
  name: "Alice",
  details: {
    age: 25,
    address: {
      city: "Wonderland",
      geo: {
        lat: 12.34,
        lng: 56.78,
      },
    },
  },
  preferences: {
    colors: ["blue", "green"],
    languages: {
      primary: "English",
      secondary: "French",
    },
  },
};

const findDepth = (obj, depth = 1) => {
  for (let i in obj) {
    console.log("Depth of " + i + " is: " + depth);
    if (typeof obj[i] === "object") {
      let depthCount = depth + 1;
      findDepth(obj[i], depthCount);
    }
  }
};

findDepth(obj);
