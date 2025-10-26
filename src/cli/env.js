const parseEnv = () => {
  // Write your code here
  const variables = Object.keys(process.env);
  const vars = [];
  for (const variable of variables) {
    if (variable.startsWith('RSS_')) {
      vars.push(`${variable}=${process.env[variable]}`);
    }
  }
  console.log(vars.join('; '));
};

parseEnv();
