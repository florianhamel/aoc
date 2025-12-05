export function getSumOfRepeatedSequences(ranges: Readonly<[number, number][]>) {
  let sum = 0;
  for (let range of ranges) {
    sum += getRepeatedSequences(range).reduce((prev, curr) => prev + curr, 0);
  }
  return sum;
}

export function getRepeatedSequences(range: [number, number]) {
  const sequences = [];
  for (let nb = range[0]; nb <= range[1]; nb++) {
    const nbAsStr = nb.toString();
    for (let i = 1; i < nbAsStr.length; i++) {
      if (isDivisorOfNbLength(i, nbAsStr)) {
        if (isRepeatSequence(i, nbAsStr)) {
          sequences.push(nb);
          break;
        }
      }
    }
  }
  return sequences;
}

function isDivisorOfNbLength(i: number, nbAsStr: string) {
  return nbAsStr.length % i === 0;
}

export function isRepeatSequence(divisor: number, nbAsStr: string) {
  let prev = nbAsStr.substring(0, divisor);
  let i = divisor;
  while (i < nbAsStr.length) {
    const curr = nbAsStr.substring(i, i + divisor);
    if (curr !== prev) {
      return false;
    }
    prev = curr;
    i += divisor;
  }
  return true;
}

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
