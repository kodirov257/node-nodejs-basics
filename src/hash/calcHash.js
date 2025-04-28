import { pipeline } from 'node:stream/promises';
import crypto from 'node:crypto';
import fs from 'node:fs';

const calculateHash = async () => {
    // Write your code here 
    const sourceFile = './src/hash/files/fileToCalculateHashFor.txt';

    // const hash = crypto.createHash('sha256');
    // await pipeline(
    //     fs.createReadStream(sourceFile),
    //     async (source) => {
    //         source.setEncoding('utf8');
    //         for await (const chunk of source) {
    //             hash.update(chunk);
    //         }
    //     }
    // );
    // console.log(hash.digest('hex'));

    // Or

    pipeline(
        fs.createReadStream(sourceFile),
        crypto.createHash('sha256').setEncoding('hex'),
        async (hash) => {
            const hashes = await hash.toArray();
            console.log(hashes[0]);
        }
    );
};

await calculateHash();