import { join } from 'node:path';
import { Worker } from 'worker_threads';
import { availableParallelism } from 'node:os';

const performCalculations = async () => {
  // Write your code here
  const cores = availableParallelism();

  const tasks = [];

  for (let i = 0; i < cores; i++) {
    const task = new Promise(resolve => {
      const worker = new Worker(join(import.meta.dirname, 'worker.js'));
      worker.postMessage(10 + i);

      worker.on('message', result => {
        resolve({ status: 'resolved', data: result });
        worker.terminate();
      });

      worker.on('error', () => {
        resolve({ status: 'error', data: null });
        worker.terminate();
      });
    });

    tasks.push(task);
  }

  const result = await Promise.all(tasks);
  console.log(result);
};

await performCalculations();
