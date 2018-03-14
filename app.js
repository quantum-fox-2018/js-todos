const argv = process.argv

const ToDoModel = require('./ToDoModel')
const ToDoView = require('./ToDoView')

let rawCommand = argv[2].split(':')
let command = rawCommand[0]
let forFilter = rawCommand[1]

switch (command) {
  case 'help': ToDoModel.help(); break;
  case 'list': ToDoModel.list(forFilter,ToDoView.list); break;
  case 'add': ToDoModel.add(ToDoView.add); break;
  case 'findById': ToDoModel.findById(ToDoView.findById); break;
  case 'delete': ToDoModel.delete(ToDoView.delete); break;
  case 'complete': ToDoModel.complete(ToDoView.complete); break;
  case 'uncomplete': ToDoModel.uncomplete(ToDoView.uncomplete); break;
  case 'tag': ToDoModel.tags(ToDoView.tags); break;
  case 'filter': ToDoModel.filter(forFilter,ToDoView.filter); break;
  default: console.log('default'); break;
}
