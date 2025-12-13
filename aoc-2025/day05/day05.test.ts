import { fromAoc2025, getFileContent } from '../../shared/utils';
import { countFreshIngredients, countIdsInRanges as countFreshIngredientIds, intersect } from './day05';

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
      const ranges = strRanges!.map((r) => r.split('-').map((v) => +v) as [number, number]);
      const ids = strIds!.map((v) => +v);

      // when
      const output = countFreshIngredients(ranges, ids);

      // then
      expect(output).toBe(3);
    });
  });

  describe('day05 - part 2/2', () => {
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
      const ranges = strRanges!.map((r) => r.split('-').map((v) => +v) as [number, number]);

      // when
      const output = countFreshIngredientIds(ranges);

      // then
      expect(output).toBe(14);
    });

    it.each([
      {
        setA: [20, 40] as [number, number],
        setB: [30, 35] as [number, number],
        expected: [30, 35],
      },
      {
        setA: [20, 40] as [number, number],
        setB: [30, 50] as [number, number],
        expected: [30, 40],
      },
      {
        setA: [20, 40] as [number, number],
        setB: [10, 30] as [number, number],
        expected: [20, 30],
      },
      {
        setA: [20, 40] as [number, number],
        setB: [40, 60] as [number, number],
        expected: [40, 40],
      },
      { setA: [20, 40] as [number, number], setB: [0, 10] as [number, number], expected: null },
      { setA: [20, 40] as [number, number], setB: [50, 60] as [number, number], expected: null },
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
    const ranges = strRanges!.map((r) => r.split('-').map((v) => +v) as [number, number]);
    const ids = strIds!.map((v) => +v);

    console.log('Part 1:', countFreshIngredients(ranges, ids));
    console.log('Part 2:', countFreshIngredientIds(ranges));
    // Part 2: NOT 353703972459442
  });
});
