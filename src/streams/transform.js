import { Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

const transform = async () => {
  // Write your code here
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const reversed = chunk.toString().split('').reverse().join('');
      this.push(reversed);
      callback();
    }
  });

  await pipeline(process.stdin, transformStream, process.stdout);
};

await transform();
