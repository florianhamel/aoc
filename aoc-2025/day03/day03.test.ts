import { fromAoc2025, getFileContent } from '../../shared/utils';
import { getSpecificJoltage as getSpecificVoltage, sumJoltages } from './day03';

describe('day03', () => {
  describe('day03 - part 1/2', () => {
    it.each([
      { bank: '987654321111111', expected: 98 },
      { bank: '811111111111119', expected: 89 },
      { bank: '234234234234278', expected: 78 },
      { bank: '818181911112111', expected: 92 },
    ])('should joltage be $expected for bank $bank', (it) => {
      const joltage = getSpecificVoltage(it.bank, 2);
      expect(joltage).toBe(it.expected);
    });

    it('should sum joltages', () => {
      const banks = ['987654321111111', '811111111111119', '234234234234278', '818181911112111'];
      const joltage = sumJoltages(banks, 2);
      expect(joltage).toBe(357);
    });
  });

  describe('day03 - part 2/2', () => {
    it.each([
      { bank: '987654321111111', expected: 987654321111 },
      { bank: '811111111111119', expected: 811111111119 },
      { bank: '234234234234278', expected: 434234234278 },
      { bank: '818181911112111', expected: 888911112111 },
    ])('should solve part 2', (it) => {
      const joltage = getSpecificVoltage(it.bank, 12);
      expect(joltage).toBe(it.expected);
    });
  });

  it('should log answers', async () => {
    const raw = await getFileContent(fromAoc2025('day03'));
    const banks = raw.split('\n');

    console.log('Part 1:', sumJoltages(banks, 2));
    console.log('Part 2:', sumJoltages(banks, 12));
  });
});
