var events = require('events');
var util = require('util');

var person = function (name) {
    this.name;
};

util.inherits(person, events.EventEmitter)
