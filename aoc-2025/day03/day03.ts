export function getSpecificJoltage(bank: string, batteries: number) {
  let output = '';
  let maxIndex = 0;
  let maxValue = 0;
  while (batteries > 0) {
    for (let i = maxIndex; i < bank.length - batteries + 1; i++) {
      const curr = +bank[i]!
      if (curr > maxValue) {
        maxIndex = i;
        maxValue = curr;
      }
    }
    output += maxValue;
    maxIndex++;
    maxValue = 0;
    batteries--;
  }
  return +output;
}

export function sumJoltages(banks: Readonly<string[]>, batteries: number) {
  let sum = 0;
  for (let bank of banks) {
    sum += getSpecificJoltage(bank, batteries);
  }
  return sum;
}

/**
 * @deprecated
 */
function getJoltage(bank: string) {
  let output = '';
  let maxValue = 0;
  let maxIndex = 0;
  for (let i = 0; i < bank.length - 1; i++) {
    const curr = +bank[i]!
    if (curr > maxValue) {
      maxValue = curr;
      maxIndex = i;
    }
  }
  output += maxValue;
  maxValue = 0;
  for (let i = maxIndex + 1; i < bank.length; i++) {
    const curr = +bank[i]!;
    if (curr > maxValue) {
      maxValue = curr;
    }
  }
  output += maxValue;
  return output;
}
