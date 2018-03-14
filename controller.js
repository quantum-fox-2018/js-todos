"use strict"

const model = require('./model.js');
const view = require('./view.js');


class Controller{

  static getHelp(){
    let help_list = model.getHelpList();
    view.showHelp(help_list);
  }

  static getToDos(){
    let to_do_list = model.getToDoList();
    view.showToDos(to_do_list);
  }

  static addToDo(new_to_do){
    (model.createToDo(new_to_do)) ? view.showSucsess('add') : view.showFailure('add');
  }

  static findToDo(to_do_id){
    let to_do = model.findToDoById(to_do_id);
    (to_do) ? view.showToDo(to_do) : view.showFailure('find');
  }

  static deleteToDo(to_do_id){
    let checkDeleted = model.deleteToDoById(to_do_id);
    (checkDeleted) ? view.showSucsess('delete') : view.showFailure('delete');
  }

  static markToDo(to_do_id,markType){
    let to_do = model.markToDoById(to_do_id,markType);
    (to_do) ? view.showSucsess('complete') : view.showFailure('complete');
  }
}

module.exports = Controller;
