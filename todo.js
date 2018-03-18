var Controller = require(`./controller.js`);

var argv = process.argv;
var command = argv[2];
var added = argv[3];

if(command === `help`) {
  Controller.showHelp();
} else if(command === 'list') {
  Controller.showList();
} else if(command === 'add') {
  Controller.addToDo(added);
} else if(command === 'findById') {
  Controller.findById(added)
} else if(command === 'delete') {
  Controller.deleteTask(added)
}
