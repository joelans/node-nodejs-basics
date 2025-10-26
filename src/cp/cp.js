import { join } from 'node:path';
import { spawn } from 'child_process';

const spawnChildProcess = async (args) => {
  // Write your code here
  const filePath = join(import.meta.dirname, 'files', 'script.js');

  const childProcess = spawn('node', [filePath, ...args], {
    stdio: ['pipe', 'pipe']
  });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);

  childProcess.on('exit', code => {
    process.exit(code);
  });

};

// Put your arguments in function call to test this functionality
// spawnChildProcess( /* [someArgument1, someArgument2, ...] */);

spawnChildProcess(['first', 'second']);
