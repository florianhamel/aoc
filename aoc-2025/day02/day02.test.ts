import { fromAoc2025, getFileContent } from '../../shared/utils';
import { getDoubleSequences, getSumOfDoubleSequences } from './day02';

describe('day02', () => {
  it.each([
    { range: [11, 22] as [number, number], expected: [11, 22] },
    { range: [95, 115] as [number, number], expected: [99] },
  ])('should return $expected when given range $range', (testData) => {
    // when
    const invalidIds = getDoubleSequences(testData.range);

    // then
    expect(invalidIds).toEqual(testData.expected);
  });

  it('should return sum of invalid ids', () => {
    // given
    // '11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862'
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

  it('should log day02 answer', async () => {
    const raw = await getFileContent(fromAoc2025('day02'));
    const ranges = raw.split(',').map((r) => r.split('-').map((n) => +n) as [number, number]);

    console.log(getSumOfDoubleSequences(ranges));
  });

  it.each([
    { range: [11, 22] as [number, number], expected: [11, 22] },
    { range: [95, 115] as [number, number], expected: [99] },
  ])('should return $expected when given range $range', (testData) => {
    // when
    const invalidIds = getDoubleSequences(testData.range);

    // then
    expect(invalidIds).toEqual(testData.expected);
  });
});
