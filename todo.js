var argv = process.argv;
const Controller = require('./controller.js');

switch (argv[2]) {

  case "help": Controller.helpCommand(argv[2]);break;
  case undefined: Controller.helpCommand(argv[2]);break;
  case "list": Controller.listCommand();break;
  case "add": if(argv[3] != undefined){
    let activity = '';
    for(let i=3;i<argv.length;i++){
      activity = activity + argv[i] + ' ';
    }
    Controller.addCommand(activity.substr(0,activity.length-1));
  };break;
  case "findById": Controller.findCommand(argv[3]);break;
  case "delete": Controller.deleteCommand(argv[3]);break;
  case "complete": Controller.completeCommand(argv[3]);break;
  case "uncomplete": Controller.uncompleteCommand(argv[3]);break;

  default:break
}
