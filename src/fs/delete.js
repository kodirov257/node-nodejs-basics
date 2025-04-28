import fs from 'node:fs';

const remove = async () => {
    // Write your code here 
    const sourcePath = './src/fs/files/fileToRemove.txt';

    fs.access(sourcePath, err => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });

    fs.unlink(sourcePath, err => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });
};

await remove();