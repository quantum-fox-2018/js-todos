var fs = require('fs');
var Controller = require('./controller.js')

class Model {
  static showList() {
    var listJSON = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    return listJSON
  }

  static addTask(newTask) {
    newTask.id = id;
    id = listJSON.length + 1;
    var listJSON = Model.showList();
    listJSON.push(newTask);
    fs.writeFileSync('./data.json', JSON.stringify(listJSON), 'utf8');
    return newTask;
  }

  static findById(findId) {
    var listJSON = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    for(var i = 0; i < listJSON.length; i++) {
      if(findId == listJSON[i].id) {
        return listJSON[i];
      }
    }
    return "Data tidak ditemukan";
  }

  static deleteTask(taskId) {
    var listJSON = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    var tmp;
    for(var i = 0;i < listJSON.length; i++) {
      if(taskId == listJSON[i].id) {
        tmp = listJSON.splice(i, 1);
        fs.writeFileSync('./data.json', JSON.stringify(listJSON), 'utf8');
        return tmp;
      }
    }
    return 'task tidak ditemukan';
  }

  static completeTask(taskId) {
    var listJSON = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    for(var i = 0; i < listJSON.length; i++) {
      
    }
  }
}

module.exports = Model
