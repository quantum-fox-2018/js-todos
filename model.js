var fs = require('fs');
var Controller = require('./controller.js')

class Model {
  static showList() {
    var listJSON = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    return listJSON
  }

  static addTask(newTask) {
    var listJSON = Model.showList();
    var id = listJSON.length + 1;
    newTask.id = id;
    listJSON.push(newTask);
    fs.writeFileSync('./data.json', JSON.stringify(listJSON), 'utf8');
    return newTask;
  }

  static findById(findId) {
    var listJSON = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    for(var i = 0; i < listJSON.length; i++) {
      if(findId === listJSON[i].id) {
        return listJSON[i];
      }
    }

  }
}

module.exports = Model
