import fs from 'node:fs/promises';

const read = async () => {
    // Write your code here 
    const sourcePath = './src/fs/files/fileToRead.txt';
    
    fs.access(sourcePath).then(() => true).catch((err) => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });

    try {
        const content = await fs.readFile(sourcePath, {encoding: 'utf-8'});

        console.log(content);
    } catch (err) {
        throw new Error('FS operation failed');
    }

    // fs.readFile(sourcePath, {encoding: 'utf-8'}).then((content) => {
    //     console.log(content);
    // }).catch(err => {
    //     if (err) {
    //         throw new Error('FS operation failed');
    //     }
    // });
};

await read();