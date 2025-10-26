import fs from 'node:fs/promises';
import { join } from 'path';

const remove = async () => {
  // Write your code here
  try {
    const filePath = join(import.meta.dirname, 'files', 'fileToRemove.txt');
    await fs.rm(filePath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await remove();
