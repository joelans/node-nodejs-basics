import { createReadStream } from 'node:fs';
import { join } from 'node:path';
import { EOL } from 'node:os';

const read = async () => {
  // Write your code here
  const filePath = join(import.meta.dirname, 'files', 'fileToRead.txt');
  const readStream = createReadStream(filePath, 'utf8');

  readStream.on('data', (chunk) => {
    process.stdout.write(chunk);
    process.stdout.write(EOL);
  });

};

await read();
