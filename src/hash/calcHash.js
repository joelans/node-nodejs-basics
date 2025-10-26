import { createReadStream } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { pipeline } from 'node:stream/promises'

const calculateHash = async () => {
  // Write your code here
  const hash = createHash('sha256');
  const filePath = join(import.meta.dirname, 'files', 'fileToCalculateHashFor.txt');
  const readStream = createReadStream(filePath, 'utf8');

  await pipeline(readStream, hash);
  console.log(hash.digest('hex'));
};

await calculateHash();
