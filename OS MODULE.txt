const os = require('os');

console.log(`operating system :',os.type());
console.log(`platform :`, os.platform());
console.log(`Architecture :', os.arch());
console.log(`os relase:', os.relase());
console.log(`Hostname:', os.hostname());
console.log(`Temporary Directory :', os.tempdir());


constcpus = os.cpus();
console.log('no of cpus :',cpus.length);
for( i in cpus) 
  console.log(cpus[i])
