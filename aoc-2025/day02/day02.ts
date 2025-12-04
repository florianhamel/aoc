export function getSumOfDoubleSequences(ranges: Readonly<[number, number][]>) {
  let sum = 0;
  for (let range of ranges) {
    sum += getDoubleSequences(range).reduce((prev, curr) => prev + curr, 0);
  }
  return sum;
}

export function getDoubleSequences(range: [number, number]) {
  const duplicates = [];
  for (let i = range[0]; i <= range[1]; i++) {
    const nb = i.toString();
    if (nb.length % 2 === 0) {
      const firstPart = nb.substring(0, Math.floor(nb.length / 2));
      const secondPart = nb.substring(Math.ceil(nb.length / 2));
      if (firstPart === secondPart) {
        duplicates.push(i);
      }
    }
  }
  return duplicates;
}
