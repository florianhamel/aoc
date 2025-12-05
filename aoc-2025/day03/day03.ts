export function sumJoltages(banks: Readonly<string[]>) {
  let sum = 0;
  for (let bank of banks) {
    sum += +getJoltage(bank);
  }
  return sum;
}

export function getJoltage(bank: Readonly<string>) {
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
