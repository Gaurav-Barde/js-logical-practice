const breadCrumb = [
  { id: 3, parentId: 12, title: "Headphones" },
  { id: 19, parentId: 28, title: "True wireless" },
  { id: 28, parentId: 3, title: "Wired" },
  { id: 12, parentId: null, title: "Audio" },
  { id: null, parentId: 19, title: "Bluetooth" },
];

function generateHierarchy(arr) {
  const parentToChild = new Map();
  let root = null;

  for (const item of arr) {
    if (item.parentId === null) root = item;
    parentToChild.set(item.parentId, item);
  }

  const result = [];
  const visited = new Set();

  let current = root;

  while (current) {
    if (visited.has(current.id)) break;
    visited.add(current.id);

    result.push(current.title);
    current = parentToChild.get(current.id);
  }

  return result.join(" >> ");
}

const result = generateHierarchy(breadCrumb);
