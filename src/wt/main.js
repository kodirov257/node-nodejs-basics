import { Worker } from 'node:worker_threads';
import os from 'node:os';
import { resolve } from 'node:path';

const workerPath = './src/wt/worker.js';
const startingNumber = 10;

const performCalculations = async () => {
    // Write your code here
    const cpuNumber = os.cpus().length;
    const workers = [];

    for (let i = 0; i < cpuNumber; i++) {
        workers.push(createWorker(startingNumber + i));
    }

    console.log(await Promise.all(workers));
};

const createWorker = async (num) => {
    return new Promise((resolve, reject) => {
        const worker = new Worker(workerPath, {workerData: num});

        worker.on('message', (value) => resolve({status: 'resolved', data: value}));

        worker.on('error', () => resolve({status: 'error', data: null}));

        worker.on('exit', (code) => {
            if (code !== 0)
              reject(new Error(`Worker stopped with exit code ${code}`));
          });
    });
};



await performCalculations();