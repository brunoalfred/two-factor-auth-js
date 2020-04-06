// Global Objects means are available in all the modules. 


console.log(__dirname);
console.log(__filename);

var jina = require('./modules_require');
var jumla = require('./modules_require');

var person = ['Asha', 'Rose'];

console.log(jina(person));


