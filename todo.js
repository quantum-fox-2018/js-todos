var argv = process.argv;
const Controller = require('./controller.js');

if(argv[2].substr(0,6) == "filter"){
  var filterCommand = argv[2].split(":")
  argv[2] = "filter";
}

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
  case "list:created": Controller.sortCreated(argv[3]);break;
  case "list:completed": Controller.sortCompleted(argv[3]);break;
  case "tag": if(argv[4] != undefined){
    let tagNames = [];
    for(let i=4;i<argv.length;i++){
      tagNames.push(argv[i]);
    }
    Controller.addTagCommand(argv[3],tagNames);
  };;break;
  case "filter": Controller.filterCommand(filterCommand[1]);break;

  default:break
}
