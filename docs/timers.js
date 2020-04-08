const fs = require('fs');

function someAsyncOperation(callback) {
    // Assume this takes 95ms to complete
    fs.readFile('./file.md', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
    const delay = Date.now() - timeoutScheduled;
    
});