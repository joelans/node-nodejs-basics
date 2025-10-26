import fs from 'node:fs/promises';
import { join } from 'path';

const read = async () => {
  // Write your code here
  try {
    const filePath = join(import.meta.dirname, 'files', 'fileToRead.txt');
    const content = await fs.readFile(filePath, { encoding: 'utf8' });
    console.log(content);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
