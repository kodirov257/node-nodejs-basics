import { spawn } from 'node:child_process';

const spawnChildProcess = async (args) => {
    // Write your code here
    const child = spawn('node', ['./src/cp/files/script.js', ...args], {
        stdio: ['pipe'],
    });
    
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2']);
