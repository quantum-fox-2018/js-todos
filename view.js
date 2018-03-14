"use strict"

const controller = require('./controller.js');

class View {
  static showHelp(list){
    for(let index in list){
      console.log('node todo.js ' + list[index])
    }
  }

  static showToDos(object){
    let to_do_list = object.todolist;
    for(let index in to_do_list){
      let complete = '[ ]';
      if(to_do_list[index].complete === true){
        complete = '[X]';
      }
      console.log(to_do_list[index].id + '. ' + complete + ' '+ to_do_list[index].content);
    }
  }

  static showToDo(to_do){
    let complete = '[ ]';
    if(to_do.complete === true){
      complete = '[X]';
    }
    console.log(to_do.id + '. ' + complete + ' '+ to_do.content);
  }

  static showSucsess(operation_name){
    let message = '';
    switch(operation_name){
      case 'add':
        message = 'memasukan to-do baru'
        break;
      case 'delete':
        message = 'menghapus to-do'
        break;
      case 'complete':
        message = 'mengganti tanda to-do'
        break;
    }
    console.log(`Berhasil ${message}`);
  }

  static showFailure(operation_name){
    let message;
    switch(operation_name){
      case 'add':
        message = 'memasukan to-do baru'
        break;
      case 'find':
        message = 'mencari, to-do tidak ditemukan'
        break;
      case 'delete':
        message = 'menghapus to-do'
        break;
      case 'complete':
        message = 'mengganti tanda to-do'
        break;
    }
    console.log(`Gagal ${message}`);
  }
}

module.exports = View;
