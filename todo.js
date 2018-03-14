var argv = process.argv;
const Controller = require('./controller.js')

if(argv[2] == "help" || argv[2] == undefined){
  Controller.helpCommand(argv[2])
}
else if(argv[2] == "list"){
  Controller.listCommand();
}

else if(argv[2] == "add"){

  if(argv[3] != undefined){
    let activity = '';
    for(let i=3;i<argv.length;i++){
      activity = activity + argv[i] + ' ';
    }
    Controller.addCommand(activity.substr(0,activity.length-1));
  }
}

else if(argv[2] == "findById"){
  Controller.findCommand(argv[3]);
}

else if(argv[2] == "delete"){
  Controller.deleteCommand(argv[3]);
}

else if(argv[2] == "complete"){
  Controller.completeCommand(argv[3]);
}

else if(argv[2] == "uncomplete"){
  Controller.uncompleteCommand(argv[3]);
}
