import fs from 'node:fs/promises';
import { join } from 'path';

const create = async () => {
  // Write your code here
  try {
    const message = 'I am fresh and young';
    const filePath = join(import.meta.dirname, 'files', 'fresh.txt');
    await fs.writeFile(filePath, message, { flag: 'wx' });
  } catch(error) {
    if (error.code === 'EEXIST') {
      throw new Error('FS operation failed');
    }
    throw error;
  }
};

await create();
