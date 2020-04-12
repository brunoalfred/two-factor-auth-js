var fs = require('fs');

var result = fs.readFileSync('./file.txt', 'utf8');

fs.writeFile('write.md', result);