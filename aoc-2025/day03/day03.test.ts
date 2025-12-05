import { fromAoc2025, getFileContent } from '../../shared/utils';
import { getJoltage, sumJoltages } from './day03';

describe('day03', () => {
  describe('day03 - part 1/2', () => {
    it.each([
      { bank: '987654321111111', expected: '98' },
      { bank: '811111111111119', expected: '89' },
      { bank: '234234234234278', expected: '78' },
      { bank: '818181911112111', expected: '92' },
    ])('should joltage be $expected for bank $bank', (it) => {
      const joltage = getJoltage(it.bank);
      expect(joltage).toBe(it.expected);
    });

    it('should sum joltages', () => {
      const banks = ['987654321111111', '811111111111119', '234234234234278', '818181911112111'];
      const joltage = sumJoltages(banks);
      expect(joltage).toBe('357');
    });
  });

  describe('day03 - part 2/2', () => {
    it.each([
      { bank: '987654321111111', expected: 98 },
      { bank: '811111111111119', expected: 89 },
      { bank: '234234234234278', expected: 78 },
      { bank: '818181911112111', expected: 92 },
    ])('should solve part 2', (it) => {});
  });

  it('should log answers', async () => {
    const raw = await getFileContent(fromAoc2025('day03'));
    const banks = raw.split('\n');

    console.log('Part 1:', sumJoltages(banks));
    // console.log('Part 2:' /* result */);
  });
});
