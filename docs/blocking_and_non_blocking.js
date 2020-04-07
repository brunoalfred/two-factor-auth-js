const fs = require('fs');
path.join(__dirname, 'file.md');
fs.readFile('./file.md', (err, data) => {
    if (err) throw err;
    console.log(data);
});

