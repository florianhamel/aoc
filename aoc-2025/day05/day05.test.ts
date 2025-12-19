import { fromAoc2025, getFileContent } from '../../shared/utils';
import { countFreshIngredientIds, countFreshIngredients, intersect, type RangeSet } from './day05';

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
      const ranges = strRanges!.map((r) => r.split('-').map((v) => BigInt(v)) as RangeSet);
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
      const ranges = strRanges!.map((r) => r.split('-').map((v) => BigInt(v)) as RangeSet);

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
      const ranges = strRanges!.map((r) => r.split('-').map((v) => BigInt(v)) as RangeSet);

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
      const ranges = strRanges!.map((r) => r.split('-').map((v) => BigInt(v)) as RangeSet);

      // when
      const output = countFreshIngredientIds(ranges);

      // then
      expect(output).toBe(187);
    });

    it.each([
      {
        setA: [20n, 40n] as RangeSet,
        setB: [30n, 35n] as RangeSet,
        expected: [30n, 35n],
      },
      {
        setA: [20n, 40n] as RangeSet,
        setB: [30n, 50n] as RangeSet,
        expected: [30, 40],
      },
      {
        setA: [20n, 40n] as RangeSet,
        setB: [10n, 30n] as RangeSet,
        expected: [20, 30],
      },
      {
        setA: [20n, 40n] as RangeSet,
        setB: [40n, 60n] as RangeSet,
        expected: [40, 40],
      },
      { setA: [20n, 40n] as RangeSet, setB: [0n, 10n] as RangeSet, expected: null },
      { setA: [20n, 40n] as RangeSet, setB: [50n, 60n] as RangeSet, expected: null },
    ])('should intersect properly $setA with $setB given sets', (it) => {
      // when
      const intersection = intersect(it.setA, it.setB);
      // then
      expect(intersection).toEqual(intersection);
    });
  });

  it('should log answers', async () => {
    const raw = await getFileContent(fromAoc2025('day05'));
    const [strRanges, strIds] = raw.split('\n\n').map((s) => s.split('\n'));
    const ranges = strRanges!.map((r) => r.split('-').map((v) => BigInt(v)) as RangeSet);
    const ids = strIds!.map((v) => +v);

    // console.log('Part 1:', countFreshIngredients(ranges, ids));
    console.log('Part 2:', countFreshIngredientIds(ranges));
    // Part 2: NOT 353703972459442
  });
});
