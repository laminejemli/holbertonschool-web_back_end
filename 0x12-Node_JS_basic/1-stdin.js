process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const nom = process.stdin.read();
  if (nom !== null) {
    process.stdout.write(`Your name is: ${nom}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});