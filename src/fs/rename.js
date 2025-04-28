import fs from 'node:fs';

const rename = async () => {
    // Write your code here 
    const sourcePath = './src/fs/filesy/wrongFilename.txt';
    const destinationPath = './src/fs/files/properFilename.md';

    fs.access(sourcePath, err => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });

    fs.access(destinationPath, err => {
        if (!err) {
            throw new Error('FS operation failed');
        }
    });

    fs.rename(sourcePath, destinationPath, err => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });
};

await rename();