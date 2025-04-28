import fs from 'node:fs';

const copy = async () => {
    // Write your code here 
    const sourcePath = './src/fs/files';
    const destinationPath = './src/fs/files_copy';

    fs.access(sourcePath, err => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });

    if (fs.existsSync(destinationPath)) {
        throw new Error('FS operation failed');
    }

    fs.cp(sourcePath, destinationPath, {recursive: true, errorOnExist: true, force: false}, err => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });
};

await copy();
