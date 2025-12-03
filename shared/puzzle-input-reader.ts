import * as fs from 'fs';

export const puzzleInputPath = './puzzle-input.txt';

export class PuzzleInputReader {
  static readonly path = '/aoc-2025/day01/puzzle-input.txt';

  static async getPuzzleInput(filePath: string): Promise<string> {
    try {
      return await fs.promises.readFile(filePath, 'utf8');
    } catch (error: any) {
      throw new Error(`Error reading file: ${error.message}`);
    }
  }
}
