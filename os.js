const os = require('os');

console.log(`Operating System : ${os.type()}`);
console.log(`Platform        : ${os.platform()}`);
console.log(`Architecture    : ${os.arch()}`);
console.log(`OS Release      : ${os.release()}`);
console.log(`Hostname        : ${os.hostname()}`);
console.log(`Temp Directory  : ${os.tmpdir()}`);

const cpus = os.cpus();
console.log('Number of CPUs  :', cpus.length);
cpus.forEach((cpu, i) => {
  console.log(`CPU ${i + 1}:`, cpu);
});
