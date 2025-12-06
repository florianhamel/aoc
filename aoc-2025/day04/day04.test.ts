import { fromAoc2025, getFileContent } from '../../shared/utils';
import {
  countForkableRollsOfPaper,
  countMaxForkableRollsOfPaper
} from './day04';

describe('day04', () => {
  describe('day04 - part 1/2', () => {
    it('should solve part 1', () => {
      // given
      const diagram =
        '..@@.@@@@.\n' +
        '@@@.@.@.@@\n' +
        '@@@@@.@.@@\n' +
        '@.@@@@..@.\n' +
        '@@.@@@@.@@\n' +
        '.@@@@@@@.@\n' +
        '.@.@.@.@@@\n' +
        '@.@@@.@@@@\n' +
        '.@@@@@@@@.\n' +
        '@.@.@@@.@.';

      // when
      const rollsOfPaper = countForkableRollsOfPaper(diagram);

      // then
      expect(rollsOfPaper).toBe(13);
    });
  });

  describe('day04 - part 2/2', () => {
    it('should solve part 2', () => {
      // given
      const diagram =
        '..@@.@@@@.\n' +
        '@@@.@.@.@@\n' +
        '@@@@@.@.@@\n' +
        '@.@@@@..@.\n' +
        '@@.@@@@.@@\n' +
        '.@@@@@@@.@\n' +
        '.@.@.@.@@@\n' +
        '@.@@@.@@@@\n' +
        '.@@@@@@@@.\n' +
        '@.@.@@@.@.';

      // when
      const rollsOfPaper = countMaxForkableRollsOfPaper(diagram);

      // then
      expect(rollsOfPaper).toBe(43);
    });
  });

  it('should log answers', async () => {
    const rawDiagram = await getFileContent(fromAoc2025('day04'));

    console.log('Part 1:', countForkableRollsOfPaper(rawDiagram));
    console.log('Part 2:', countMaxForkableRollsOfPaper(rawDiagram));
  });
});
