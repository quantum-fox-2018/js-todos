const controller = require('./controller.js')

var proses = process.argv;
var input1 = process.argv[2]
var input2 = process.argv[3];

if (input1 == undefined) {
  controller.noInput()
} else if (input1 == 'help') {
  controller.LogHelp();
} else if (input1 == 'list') {
  controller.logList();
} else if (input1 == 'add') {
  controller.add()
} else if (input1 == 'findById') {
  controller.foundId();
} else if (input1 == 'delete') {
  controller.delete()
}
