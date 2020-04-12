var fs = require('fs');

var result = fs.readFileSync('./file.txt', 'utf8');

fs.writeFileSync('./write.md', result);