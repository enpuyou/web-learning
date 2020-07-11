const fs = require('fs');
const { worker } = require('cluster');

const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// event listener (data event)
// readStream.on('data', (chunk) => {
//   console.log("-----new chunk-----")
//   console.log(chunk)
//   writeStream.write('\n--------NEW CHUNK--------\n')
//   writeStream.write(chunk)
// })

// piping
readStream.pipe(writeStream)

