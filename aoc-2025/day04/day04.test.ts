import { fromAoc2025, getFileContent } from '../../shared/utils';
import { countForkableRollsOfPaper } from './day04';

describe('day04', () => {
  describe('day04 - part 1/2', () => {
    it('should solve part 1', () => {
      // given
      const diagram = (
        '..@@.@@@@.\n' +
        '@@@.@.@.@@\n' +
        '@@@@@.@.@@\n' +
        '@.@@@@..@.\n' +
        '@@.@@@@.@@\n' +
        '.@@@@@@@.@\n' +
        '.@.@.@.@@@\n' +
        '@.@@@.@@@@\n' +
        '.@@@@@@@@.\n' +
        '@.@.@@@.@.'
      )
        .split('\n')
        .map((line) => line.split(''));

      // when
      const rollsOfPaper = countForkableRollsOfPaper(diagram);

      // then
      expect(rollsOfPaper).toBe(13);
    });
  });

  describe('day04 - part 2/2', () => {
    it.each([
      // Add test cases here
    ])('should solve part 2', (it) => {
      // given
      // when
      // then
    });
  });

  it('should log answers', async () => {
    const raw = await getFileContent(fromAoc2025('day04'));
    const diagram = raw.split('\n').map((line) => line.split(''));

    console.log('Part 1:', countForkableRollsOfPaper(diagram));
    console.log('Part 2:' /* result */);
  });
});
