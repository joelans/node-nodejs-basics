import { createWriteStream } from 'node:fs';
import { join } from 'node:path';
import { pipeline } from 'node:stream/promises';

const write = async () => {
  // Write your code here
  const filePath = join(import.meta.dirname, 'files', 'fileToWrite.txt');
  const writeStream = createWriteStream(filePath);
  await pipeline(process.stdin, writeStream);
};

await write();
