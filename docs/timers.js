const fs = require('fs');

function someAsyncOperation(callback) {
    // Assume this takes 95ms to complete
    fs.readFile('./file.md', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
    const delay = Date.now() - timeoutScheduled;
    console.log(`${delay}ms have passed since I was schedualed`);

}, 100);

// 