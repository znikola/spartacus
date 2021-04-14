export function chunkArray(myArray, chunk_size) {
  const input = [...myArray];
  const results = [];

  while (input.length) {
    results.push(input.splice(0, chunk_size));
  }

  return results;
}
