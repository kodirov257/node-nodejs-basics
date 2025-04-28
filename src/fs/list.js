import fs from 'node:fs/promises';

const list = async () => {
    // Write your code here 
    const sourcePath = './src/fs/filess';

    try {
        const filenames = await fs.readdir(sourcePath, {recursive: true});

        filenames.forEach(file => {
            console.log(file);
        });
    } catch(err) {
        throw new Error('FS operation failed');
    }
};

await list();