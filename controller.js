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

  static sortCreated(sorttype){
    View.listCommand(Model.createdSort(sorttype));
  }

  static sortCompleted(sorttype){
    View.listCommand(Model.completedSort(sorttype));
  }

  static addTagCommand(idList,tagNames){
    let tagData = Model.addTagData(idList,tagNames);
    View.tagCommand(tagData,tagNames)

  }

  static filterCommand(category){
    View.listCommand(Model.filterData(category));
  }
}

module.exports = Controller;
