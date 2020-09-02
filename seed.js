const fs = require('fs');
const faker = require('faker')


const writeLine = (id) => {
  return `${id}, "${faker.name.findName()}", "${faker.random.words()}"\n`
}

writeNTimes = (writer, times, callback) => {
  const writeFile = () => {
    let ok = true;
    do {
      times--;
      const data = writeLine(times+1);
      if (times === 0) {
        writer.write(data, 'ascii', callback);
      } else {
        ok = writer.write(data, 'ascii')
      }
    } while (times > 0 && ok);
    if (times > 0) {
      writer.once('drain', writeFile)
    }
  }
  writeFile();
}


const writeStream = fs.createWriteStream('./test.csv')
const line1 = 'id, name, description\n';
writeStream.write(line1);
writeNTimes(writeStream, 10000000, ()=>{
  console.log('written!')
})