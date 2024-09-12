const list = [];
// let total = 0;

export function totalList(size) {
  for (let i = 0; i < size; i++) {
    list.push("Value " + i);
  }
  return list.length;
  // return (total += size);
}
