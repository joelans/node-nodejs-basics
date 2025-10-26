const parseArgs = () => {
  // Write your code here
  const args = [];
  for (let i = 2; i < process.argv.length; i++) {
    if(process.argv[i].startsWith('--')) {
      args.push(`${process.argv[i].substring(2)} is ${process.argv[i + 1]}`);
      i++;
    }
  }
  console.log(args.join(', '));
};

parseArgs();
