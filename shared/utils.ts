import * as fs from 'fs';

export async function getFileContent(filePath: string): Promise<string> {
  try {
    return await fs.promises.readFile(filePath, 'utf8');
  } catch (error: any) {
    throw new Error(`Error reading file: ${error.message}`);
  }
}