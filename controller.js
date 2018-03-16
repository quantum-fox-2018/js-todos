var View = require(`./view.js`)
var Model = require('./model.js')

class Controller {
  static showHelp() {
    return View.showHelp();
  }

  static showList() {
    var data = Model.showList();
    View.showList(data);
  }

  static addToDo(task) {
    var newTask = {
      todo: task
    }
    var task1 = Model.addTask(newTask);
    View.addToDo(task1);
  }

  static findById(findId) {
    var taskId = Model.findById(findId);
    View.showIdTask(taskId);
  }
}

module.exports = Controller
