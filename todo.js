var argv = process.argv;   //Return array of directory and the input from command line
var command = argv[2];
var input = argv.slice(3, argv.length).join(' ');
var Controller = require('./controller.js');

Controller.check(command, input);

module.exports = argv;