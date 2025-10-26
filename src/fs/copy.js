import fs from 'node:fs/promises';
import { join } from 'path';

const copy = async () => {
  // Write your code here
  try {
    const src = join(import.meta.dirname, 'files');
    const dest = join(import.meta.dirname, 'files_copy');
    const stats = await fs.stat(src);
    if (!stats.isDirectory()) {
      throw error;
    }
    await fs.cp(src, dest, { errorOnExist: true, force: false, recursive: true });
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
