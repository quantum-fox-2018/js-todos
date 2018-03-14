const argv = process.argv

const ToDoModel = require('./ToDoModel')
const ToDoView = require('./ToDoView')

switch (argv[2]) {
  case 'help': ToDoModel.help(); break;
  case 'list': ToDoModel.list(ToDoView.list); break;
  case 'add': ToDoModel.add(ToDoView.add); break;
  case 'findById': ToDoModel.findById(ToDoView.findById); break;
  case 'delete': ToDoModel.delete(ToDoView.delete); break;
  case 'complete': ToDoModel.complete(ToDoView.complete); break;
  case 'uncomplete': ToDoModel.uncomplete(ToDoView.uncomplete); break;
  case 'list:created': ToDoModel.listCreated(ToDoView.listCreated); break;
  case 'list:completed': ToDoModel.listCompleted(ToDoView.listCompleted); break;
  default: console.log('default'); break;
}
// let data = fs.readFileSync('./todolist.json','utf8')
// let read = JSON.parse(data)
// console.log(read)
