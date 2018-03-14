const {ToDoController} = require('./controller.js');

let objToDo = {
  menu: process.argv[2],
  input: process.argv[3],
  additional: process.argv.slice(4)
};

let todo = new ToDoController(objToDo);

todo.do();
