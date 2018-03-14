"use strict"

const controller = require('./controller.js');
const fs = require('fs');

const help_list = ['','help','list','add <task_content>','findById <task_id>','delete <task_id>', 'complete <task_id>', 'uncomplete <task_id>'];

class Model {
  static getHelpList(){
    return help_list;
  }

  static getToDoList(option1,option2){
    let to_do_list = fs.readFileSync('data.json','utf8');
    to_do_list = JSON.parse(to_do_list);


    if(option1 === 'date'){
      let to_do_formatted = to_do_list.todolist;
      to_do_formatted.sort(function(a, b) {
        var dateA = new Date(a.created_at), dateB = new Date(b.created_at);
        if(option2 === 'asc') {
          return dateB - dateA;
        } else {
          return dateA - dateB;
        }
      });
      to_do_list.todolist = to_do_formatted;
    } else if(option1 === 'complete'){
      let to_do_formatted = to_do_list.todolist;
      to_do_formatted.sort(function(a, b) {
        var completeA = new Date(a.complete), completeB = new Date(b.complete);
        if(option2 === 'asc') {
          return completeA - completeB;
        } else {
          return completeB - completeA;
        }
      });
      to_do_list.todolist = to_do_formatted;
    } else if(option1 === 'filter'){
      let to_do_formatted = to_do_list.todolist;
      let tempToDoListArray = [];
      for(let index in to_do_formatted){
        for(let indexTag in to_do_formatted[index].tags){
          if(to_do_formatted[index].tags[indexTag] === option2)
          tempToDoListArray.push(to_do_formatted[index]);
        }
      }
      tempToDoListArray.sort(function(a, b) {
        var dateA = new Date(a.created_at), dateB = new Date(b.created_at);
        return dateB - dateA;
      });
      to_do_list.todolist = tempToDoListArray;
    }

    return to_do_list;
  }

  static createToDo(new_to_do){
    let result;
    let data = Model.getToDoList();
    let lastId = data.todolist[data.todolist.length-1].id;

    data.todolist.push({id : lastId+1, content: new_to_do, complete: false, created_at: new Date(), tags:[]});
    (Model.writeToFile(data)) ? result = true: result = false;

    return result;
  }

  static findToDoById(id){
    let objectTodo = null;
    let data = Model.getToDoList();
    let to_do_list = data.todolist;

    for(let index in to_do_list){
      if(to_do_list[index].id === parseInt(id)){
        objectTodo = to_do_list[index];
      }
    }
    return objectTodo;
  }

  static deleteToDoById(id){
    let result;
    let new_todos = [];
    let data = Model.getToDoList();
    let todos = data.todolist;

    for(let index in todos){
      if(todos[index].id !== parseInt(id)){
        new_todos.push(todos[index]);
      }
    }

    data.todolist = new_todos;
    (Model.writeToFile(data)) ? result = true: result = false;

    return result;
  }

  static markToDoById(id,type){
    let result;
    let data = Model.getToDoList();
    let todos = data.todolist;

    for(let index in todos){
      if(todos[index].id === parseInt(id)){
        switch(type){
          case 'complete' :
            todos[index].complete = true;
            break;
          case 'uncomplete' :
            todos[index].complete = false;
            break;
        }
      }
    }

    data.todolist = todos;
    (Model.writeToFile(data)) ? result = true: result = false;

    return result;
  }

  static writeToFile(data){
    //dapet dari stackoverflow klo parameter ke 3 itu bisa buat pretty-print JSON
    data = JSON.stringify(data,null,2);

    try{
      fs.writeFileSync('data.json',data);
    }catch(err){
    return false;
    }

    return true;
  }

  static addToDoTag(tag_n_id){
    let id = tag_n_id[3];
    let tags = tag_n_id.slice(4);
    let data = Model.getToDoList();
    let to_do_list = data.todolist;
    let new_todos =[];
    let result;

    for(let index in to_do_list){
      if(to_do_list[index].id === parseInt(id)){
        for(let indexTag in tags){
          to_do_list[index].tags.push(tags[indexTag]);
        }
      }
      new_todos.push(to_do_list[index]);
    }

    data.todolist = new_todos;
    (Model.writeToFile(data)) ? result = true: result = false;

    return result;
  }

}

module.exports = Model;
