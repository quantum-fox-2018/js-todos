var Controller = require(`./controller.js`);

var argv = process.argv;
var command = argv[2];

if(command === `help`) {
  Controller.showHelp();
} else if(command === 'list') {
  Controller.showList();
}
