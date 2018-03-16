class View{
  static showHelp() {
    console.log(`node todo.js help`);
    console.log(`node todo.js list`);
    console.log(`node todo.js add <task_content>`);
    console.log(`node todo.js findById <task_id>`);
    console.log(`node todo.js delete <task_id> `);
    console.log(`node todo.js complete <task_id>`);
    console.log(`node todo.js uncomplete <task_id>`);
  }

  static showList(data) {
    for(var i = 0; i < data.length; i++) {
      console.log(data[i].id + ". " + data[i].todo);
    }
  }

  static addToDo(data) {
    console.log('Added ' + data.todo + ' to your TODO list...');
  }

  static showIdTask(idTask) {
    console.log(idTask);
  }
}

module.exports = View
