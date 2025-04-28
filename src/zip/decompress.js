import { pipeline } from 'node:stream';
import zlib from 'node:zlib';
import fs from 'node:fs';

const decompress = async () => {
    // Write your code here 
    const sourcePath = './src/zip/files_copy/archive.gz';
    const destinationPath = './src/zip/files_copy/fileToCompress.txt';

    pipeline(
        fs.createReadStream(sourcePath),
        zlib.createGunzip(),
        fs.createWriteStream(destinationPath),
        (err) => {
            if (err) {
              console.error('Could not unzip:', err);
            }
        }
    );
};

await decompress();