import * as fs from 'fs';
import { join } from 'node:path';

type Day = `day${number}`;

export async function getFileContent(filePath: string): Promise<string> {
  try {
    return await fs.promises.readFile(filePath, 'utf8');
  } catch (error: any) {
    throw new Error(`Error reading file: ${error.message}`);
  }
}

export function fromAoc2025(day: Day) {
  return join('aoc-2025', day, 'puzzle-input.txt');
}
