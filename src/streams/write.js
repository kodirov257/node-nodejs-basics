import fs from 'node:fs';
import { stdin } from 'node:process';

const write = async () => {
    // Write your code here 
    const sourceFile = './src/streams/files/fileToWrite.txt';

    const stream = fs.createWriteStream(sourceFile, {encoding: 'utf-8'});
    stdin.pipe(stream);
};

await write();