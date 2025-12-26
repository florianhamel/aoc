import { fromAoc2025, getFileContent } from '../../shared/utils';
import {
  countFreshIngredientIds,
  countFreshIngredients,
  intersect,
  removeRangeFrom,
  type RangeSet,
} from './day05';

describe('day05', () => {
  describe('day05 - part 1/2', () => {
    it('should solve part 1', () => {
      // given
      const input =
        '3-5\n' +
        '10-14\n' +
        '16-20\n' +
        '12-18\n' +
        '\n' +
        '1\n' +
        '5\n' +
        '8\n' +
        '11\n' +
        '17\n' +
        '32\n';
      const [strRanges, strIds] = input.split('\n\n').map((s) => s.split('\n'));
      const ranges = strRanges!.map((r) => r.split('-').map((v) => +v) as RangeSet);
      const ids = strIds!.map((v) => +v);

      // when
      const output = countFreshIngredients(ranges, ids);

      // then
      expect(output).toBe(3);
    });
  });

  describe('day05 - part 2/2', () => {
    it.each([
      { rawRange: '5-10\n' + '7-12\n' + '2-15\n' + '\n' + '1\n', expected: 14 },
      { rawRange: '5-10\n' + '7-12\n' + '25-27\n' + '\n' + '1\n', expected: 11 },
    ])('should solve part 2 easy', (it) => {
      // given
      const [strRanges, _] = it.rawRange.split('\n\n').map((s) => s.split('\n'));
      const ranges = strRanges!.map((r) => r.split('-').map((v) => +v) as RangeSet);

      // when
      const output = countFreshIngredientIds(ranges);

      // then
      expect(output).toBe(it.expected);
    });

    it('should solve part 2', () => {
      // given
      const input =
        '3-5\n' +
        '10-14\n' +
        '16-20\n' +
        '12-18\n' +
        '\n' +
        '1\n' +
        '5\n' +
        '8\n' +
        '11\n' +
        '17\n' +
        '32\n';
      const [strRanges, _] = input.split('\n\n').map((s) => s.split('\n'));
      const ranges = strRanges!.map((r) => r.split('-').map((v) => +v) as RangeSet);

      // when
      const output = countFreshIngredientIds(ranges);

      // then
      expect(output).toBe(14);
    });

    it('should solve part 2 when a bit harder', () => {
      // given
      const input =
        '50-100\n' +
        '70-85\n' +
        '25-125\n' +
        '80-150\n' +
        '175-200\n' +
        '126-180\n' +
        '510-520\n' +
        '\n' +
        '1\n';
      const [strRanges, _] = input.split('\n\n').map((s) => s.split('\n'));
      const ranges = strRanges!.map((r) => r.split('-').map((v) => +v) as RangeSet);

      // when
      const output = countFreshIngredientIds(ranges);

      // then
      expect(output).toBe(187);
    });
  });

  it.each([
    {
      toRemove: [30, 35] as RangeSet,
      from: [20, 40] as RangeSet,
      expected: [
        [20, 29],
        [36, 40],
      ],
    },
    {
      toRemove: [30, 50] as RangeSet,
      from: [20, 40] as RangeSet,
      expected: [[20, 29]],
    },
    {
      toRemove: [10, 30] as RangeSet,
      from: [20, 40] as RangeSet,
      expected: [[31, 40]],
    },
    {
      toRemove: [40, 60] as RangeSet,
      from: [20, 40] as RangeSet,
      expected: [[20, 39]],
    },
    {
      toRemove: [0, 20] as RangeSet,
      from: [20, 40] as RangeSet,
      expected: [[21, 40]],
    },
    {
      toRemove: [0, 100] as RangeSet,
      from: [20, 40] as RangeSet,
      expected: [null],
    },
  ])('should remove $toRemove from $from', (it) => {
    // when
    const range = removeRangeFrom(it.toRemove, it.from);
    // then
    expect(range).toEqual(it.expected);
  });

  it('should log answers', async () => {
    const raw = await getFileContent(fromAoc2025('day05'));
    const [strRanges, strIds] = raw.split('\n\n').map((s) => s.split('\n'));
    const ranges = strRanges!.map((r) => r.split('-').map((v) => +v) as RangeSet);
    const ids = strIds!.map((v) => +v);

    // console.log('Part 1:', countFreshIngredients(ranges, ids));
    console.log('Part 2:', countFreshIngredientIds(ranges));
    // Part 2: NOT 353703972459442
  });
});
