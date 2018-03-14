"use strict"
const Controller = require('./controller.js');

const argv = process.argv;
var command = argv[2];
var input = argv.slice(3).join(' ');

if (argv.length === 2 || command === 'help') {
    Controller.getHelp();
} else if (command === 'list') {
    Controller.getList();
} else if (command === 'add') {
    Controller.getListOfData(input);
} else if (command === 'findById') {
    Controller.findId(input);
} else if (command === 'delete') {
    Controller.delete(input);
} else if (command === 'complete') {
    Controller.complete(input);
} else if (command === 'uncomplete') {
    Controller.uncomplete(input);
}