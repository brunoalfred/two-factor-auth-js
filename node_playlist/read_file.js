var fs = require('fs');

fs.readFile('./file.txt', 'utf8', function (err, data) {
    fs.writeFile('./wrote.md', data);
});