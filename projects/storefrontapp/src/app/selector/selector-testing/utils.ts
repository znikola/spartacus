export function range(length: number) {
  return Array.from(Array(length).keys());
}

export function getRandom() {
  return Math.random()
    .toString(36)
    .substr(2, 9);
}
