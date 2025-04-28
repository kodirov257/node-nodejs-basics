import { Transform } from 'node:stream';
import { stdin, stdout } from 'node:process';

const transform = async () => {
    // Write your code here 
    const transformer = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        }
    });


    stdin.pipe(transformer).pipe(stdout);
};

await transform();