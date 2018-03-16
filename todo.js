const Controller = require('./controller.js');

var argv = process.argv;

var command = argv[2];
var input = argv.slice(3).join(' ');

if (command === 'help' || command === undefined) {
  Controller.help();
} else if (command === 'list') {
  Controller.list();
} else if (command === 'add') {
  Controller.add(input);
} else if (command === 'findById') {
  Controller.findById(input);
} else if (command === 'delete') {
  Controller.delete(input);
} else if (command === 'complete') {
  Controller.setComplete(input);
} else if (command === 'uncomplete') {
  Controller.setUnc(input);
}
