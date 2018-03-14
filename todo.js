"use strict"
const Controller = require('./controller.js');

const argv = process.argv;
var command = argv[2];

if (argv[1]) {
    Controller.getHelp();
} else {
    if (command === 'help') {
        Controller.getHelp();
    } else {
        // if (command === 'list') {

        // }
    }
}
