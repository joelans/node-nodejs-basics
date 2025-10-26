import { createReadStream, createWriteStream } from 'node:fs';
import { join } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { createGunzip } from 'node:zlib';

const decompress = async () => {
  // Write your code here
  const gunzip = createGunzip();

  const archivePath = join(import.meta.dirname, 'files', 'archive.gz');
  const readStream = createReadStream(archivePath);

  const filePath = join(import.meta.dirname, 'files', 'fileToCompress.txt');
  const writeStream = createWriteStream(filePath);

  await pipeline(readStream, gunzip, writeStream);
};

await decompress();
