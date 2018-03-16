const View = require('./view.js');
const Model = require('./model.js');

class Controller {
  static help() {
    let arrHelp = [
          ['----- SHOW COMMAND HELP -----'],
          ['$ node todo.js help # Menampilkan command apa saja yang tersedia'],
          ['$ node todo.js list # Melihat daftar TODO'],
          ['$ node todo.js add <task_content> # Menambahkan TODO ke dalam list'],
          ['$ node todo.js findById <task_id> # Melihat detail TODO sesuai `task_id` nya'],
          ['$ node todo.js delete <task_id> # Menghapus TODO sesuai `task_id` nya '],
          ['$ node todo.js complete <task_id> # Menandai status TODO selesai'],
          ['$ node todo.js uncomplete <task_id> # Menandai status TODO belum selesai']
        ];
    let viewHelp = View.printResult(arrHelp.join('\n'))

    return viewHelp;
  }

  static list() {
    let listTask = Model.showTask();
    View.printResult(listTask);
  }

  static add(newTask) {
    let addedTask = Model.addTask(newTask);
    View.printResult(addedTask);
  }

  static findById(id) {
    let foundTask = Model.findById(id);
    View.printResult(foundTask);
  }

  static delete(id) {
    let deletedTask = Model.deleteTask(id);
    View.printResult(deletedTask);
  }

  static setComplete(id) {
    let setCompleted = Model.setComplete(id);
    View.printResult(setCompleted);
  }

  static setUncomplete(id) {
    let setUncompleted = Model.setUncomplete(id);
    View.printResult(setUncompleted);
  }
}

module.exports = Controller
