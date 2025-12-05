import { fromAoc2025, getFileContent } from '../../shared/utils';
import {
  getDoubleSequences,
  getRepeatedSequences,
  getSumOfDoubleSequences,
  getSumOfRepeatedSequences
} from './day02';

describe('day02', () => {
  it.each([
    { range: [11, 22] as [number, number], expected: [11, 22] },
    { range: [95, 115] as [number, number], expected: [99] },
  ])('should return $expected when given range $range for double sequences', (testData) => {
    // when
    const invalidIds = getDoubleSequences(testData.range);

    // then
    expect(invalidIds).toEqual(testData.expected);
  });

  it('should return sum of double sequences invalid ids', () => {
    // given
    const input: [number, number][] = [
      [11, 22],
      [95, 115],
      [998, 1012],
      [1188511880, 1188511890],
      [222220, 222224],
      [1698522, 1698528],
      [446443, 446449],
      [38593856, 38593862],
    ];

    // when
    const invalidIds = getSumOfDoubleSequences(input);

    // then
    expect(invalidIds).toBe(1227775554);
  });

  describe('day02 - part 2/2', () => {
    it.each([
      { range: [11, 22] as [number, number], expected: [11, 22] },
      { range: [95, 115] as [number, number], expected: [99, 111] },
      { range: [998, 1012] as [number, number], expected: [999, 1010] },
      { range: [565653, 565659] as [number, number], expected: [565656] },
      { range: [222220, 222224] as [number, number], expected: [222222] },
      { range: [446443, 446449] as [number, number], expected: [446446] },
      { range: [1698522, 1698528] as [number, number], expected: [] },
      { range: [38593856, 38593862] as [number, number], expected: [38593859] },
      { range: [824824821, 824824827] as [number, number], expected: [824824824] },
      { range: [2121212118, 2121212124] as [number, number], expected: [2121212121] },
      { range: [1188511880, 1188511890] as [number, number], expected: [1188511885] },
    ])('should return $expected when given range $range for repeated sequences', (testData) => {
      // when
      const invalidIds = getRepeatedSequences(testData.range);

      // then
      expect(invalidIds).toEqual(testData.expected);
    });

    it('should return sum of repeated sequences invalid ids', () => {
      // given
      const ranges: [number, number][] = [
        [11, 22],
        [95, 115],
        [998, 1012],
        [222220, 222224],
        [446443, 446449],
        [565653, 565659],
        [1698522, 1698528],
        [38593856, 38593862],
        [824824821, 824824827],
        [2121212118, 2121212124],
        [1188511880, 1188511890],
      ];

      // when
      const invalidIds = getSumOfRepeatedSequences(ranges);

      // then
      expect(invalidIds).toBe(4174379265);
    });
  });

  it('should log day02 answer', async () => {
    const raw = await getFileContent(fromAoc2025('day02'));
    const ranges = raw.split(',').map((r) => r.split('-').map((n) => +n) as [number, number]);

    console.log(getSumOfDoubleSequences(ranges));
    console.log(getSumOfRepeatedSequences(ranges));
  });
});
