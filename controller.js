const View = require('./view.js')
const Model = require('./model.js')
const Todo = require('./todo.js')
class Controller{

  static helpCommand(commandArgv){
    View.helpCommand(commandArgv);
  }
  static listCommand(){
    let listData = Model.readData();
    View.listCommand(listData);
  }

  static addCommand(newData){
    Model.addData(newData);
    View.addCommand(newData)
  }

  static findCommand(findValue){
    let findedData = Model.findData(findValue);
    View.findCommand(findedData);
  }

  static deleteCommand(deleteValue){
    let deletedData = Model.deleteData(deleteValue);
    View.deleteCommand(deletedData);
  }

  static completeCommand(idActivity){

    Model.complete(idActivity);
    Controller.listCommand();
  }

  static uncompleteCommand(idActivity){

    Model.uncomplete(idActivity);
    Controller.listCommand();
  }
}

module.exports = Controller;
