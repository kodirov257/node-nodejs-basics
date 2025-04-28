import fs from 'node:fs';
import { stdout } from 'node:process';

const read = async () => {
    // Write your code here 
    const sourceFile = './src/streams/files/fileToRead.txt';

    const stream = fs.createReadStream(sourceFile, {encoding: 'utf-8'});

    stream.on('data', (chunk) => {
        stdout.write(`${chunk}\n`);
    });
};

await read();