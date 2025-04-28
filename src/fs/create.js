import fs from 'node:fs';

const create = async () => {
    // Write your code here 
    const filePath = './src/fs/files/fresh.txt';
    const content = 'I am fresh and young';

    fs.writeFile(filePath, content, {flag: 'wx'}, err => {
        if (err) {
            throw new Error('FS operation failed');
        }
    });
};

await create();