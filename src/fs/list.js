import fs from 'node:fs/promises';
import { join } from 'path';

const list = async () => {
  // Write your code here
  try {
    const directoryPath = join(import.meta.dirname, 'files');
    const files = await fs.readdir(directoryPath, { withFileTypes: true });
    const filenames = [];
    for (const file of files) {
      if (file.isFile()) {
        filenames.push(file.name);
      }
    }
    console.log(filenames);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
