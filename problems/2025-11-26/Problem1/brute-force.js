// 🧩 Problem: convert an array of objects into a single object using a specific key as the property name
// Examples: [{ id: 1, name: 'Alice' },{ id: 2, name: 'Bob' }] ===> { 1: { id: 1, name: 'Alice' }, 2: { id: 2, name: 'Bob' } }

const input = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const arrayToObject = (arr) => {
  if (!arr.length) return {};
  const obj = {};
  for (let item of arr) {
    obj[item.id] = item;
  }
  return obj;
};

const result = arrayToObject(input);
console.log(result);
