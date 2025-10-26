import { createReadStream, createWriteStream } from 'node:fs';
import { join } from 'node:path';
import { pipeline } from 'node:stream/promises';
import { createGzip} from 'node:zlib';

const compress = async () => {
  // Write your code here
  const gzip = createGzip();

  const filePath = join(import.meta.dirname, 'files', 'fileToCompress.txt');
  const readStream = createReadStream(filePath, 'utf-8');

  const archivePath = join(import.meta.dirname, 'files', 'archive.gz');
  const writeStream = createWriteStream(archivePath);

  await pipeline(readStream, gzip, writeStream);
};

await compress();
