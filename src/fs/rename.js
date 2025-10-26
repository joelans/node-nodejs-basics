import fs from 'node:fs/promises';
import { join } from 'path';
const rename = async () => {
  // Write your code here
  try {
    const oldPath = join(import.meta.dirname, 'files', 'wrongFilename.txt');
    const newPath = join(import.meta.dirname, 'files', 'properFilename.md');
    try {
      await fs.access(newPath);
      throw new Error();
    } catch(error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }
    await fs.rename(oldPath, newPath);
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();
