function generateHierarchy(arr) {
  const parentToChild = new Map();
  let root = null;

  for (const item of arr) {
    if (item.parentId === null) root = item;
    parentToChild.set(item.parentId, item);
  }

  const result = [];
  let current = root;

  while (current) {
    result.push(current.title);
    current = parentToChild.get(current.id);
  }

  return result.join(" >> ");
}
