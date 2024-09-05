const list = [];

export function addToList(size) {
  for (let i = 0; i < size; i++) {
    list.push("Value " + i);
  }
  return list.length;
}
