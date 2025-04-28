import { pipeline } from 'node:stream';
import zlib from 'node:zlib';
import fs from 'node:fs';

const compress = async () => {
    // Write your code here 
    const sourcePath = './src/zip/files/fileToCompress.txt';
    const destinationPath = './src/zip/files/archive.gz';

    pipeline(
        fs.createReadStream(sourcePath),
        zlib.createGzip(),
        fs.createWriteStream(destinationPath),
        (err) => {
            if (err) {
              console.error('Could not zip:', err);
            }
        }
    );
};

await compress();