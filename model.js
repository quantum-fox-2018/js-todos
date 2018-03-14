const fs = require('fs');
// const controller = require("./controller.js");
const view = require("./view.js");


class Model{
  constructor(){
    this.todoList = require("./data.json");
    this.helpList = require("./helpList.js");
  }

  commandCheck(param_command){
    let command = param_command[2];
    //nanti ganti switch
    switch (command) {
      case 'help':
      case undefined:
          return this.helpList.join('\n'); //ubah array menjadi string dengan enter sebagai pemisah
          break;

      case 'list':
          return this.listToString();

      case 'add':
          return this.addTask(param_command);

      case 'findById':
          return this.findById(param_command[3]);

      case 'delete':
          return this.deleteTask(param_command[3]);

      case 'complete':
          return this.completedTask(param_command[3]);

      case 'uncomplete':
          return this.uncompletedTask(param_command[3]);

      default:

    }

  }

  listToString(){
    let todoList = this.todoList;
    let stringResults = '';

    for(let i = 0; i < todoList.length; i++){
      let id = todoList[i].task_id;
      let task = todoList[i].task;
      let completedStatus = this.cekCompleted(todoList[i].completed);
      //kalo data terkahir jangan di kasih enter
      if(i == todoList.length-1){
          stringResults += `${id}. [${completedStatus}] ${task}`;
      }else{
          stringResults += `${id}. [${completedStatus}] ${task}\n`;
      }

    }

    return stringResults;
  }

  autoIncreament(){
    let todoList = this.todoList;
    //id terkahir dari array di jsonFiles
    let lastId = todoList[this.todoList.length-1].task_id;

    return parseInt(lastId)+1;
  }

  saveTask(taskName){
    let id = this.autoIncreament();
    let task = taskName;
    let newTodo = {
      ["task_id"]: `${id}`,
      ["task"]: `${task}`
    }
    this.todoList.push(newTodo);
    this.updateTask();
    // todoList.push(newTodo)
    // fs.writeFile('data.json', JSON.stringify(this.todoList, null, 2));

  }

  addTask(param_command){
    let taskName = param_command.slice(3).join(' ');

    //memasukan ke JSON files
    this.saveTask(taskName);
    return `Added "${taskName}" to your TODO list...`;
  }

  findById(task_id){
    let todoList = this.todoList;
    let taskResult = '';
    for (let i = 0; i < todoList.length; i++) {
        let id = todoList[i].task_id;
        let task = todoList[i].task;

        if(task_id == id){
          taskResult = `${id}. ${task}`;
          break;
        }else{
          taskResult = `Id tidak ditemukan`;
        }
    }

    return taskResult
  }

  deleteTask(task_id){
    for (let i = 0; i < this.todoList.length; i++) {
        let id = this.todoList[i].task_id;
        let task = this.todoList[i].task;
        if(task_id == id){
            this.todoList.splice(i, 1);
            this.updateTask();
            return `Deleted "${task}" from your TODO list...`
        }
    }

    return 'Task tidak ditemukan!';
  }

  updateTask(){
    fs.writeFile('data.json', JSON.stringify(this.todoList, null, 2));
  }

  completedTask(task_id){
    let todoList = this.todoList;
    // let taskResult = '';
    for (let i = 0; i < todoList.length; i++) {
        let id = todoList[i].task_id;
        let task = todoList[i].task;

        if(task_id == id){
          this.todoList[i].completed = "true";
          this.updateTask();
          return this.listToString();
        }else{
          // taskResult = `Id tidak ditemukan`;
        }
    }

    return `Task id tidak di temukan`;
  }

  uncompletedTask(task_id){
    let todoList = this.todoList;
    // let taskResult = '';
    for (let i = 0; i < todoList.length; i++) {
        let id = todoList[i].task_id;
        let task = todoList[i].task;

        if(task_id == id){
          this.todoList[i].completed = "false";
          this.updateTask();
          return this.listToString();
        }else{
          // taskResult = `Id tidak ditemukan`;
        }
    }

    return `Task id tidak di temukan`;
  }

  cekCompleted(status){
    let completedStatus = ' ';
    if(status == "true"){
      completedStatus = 'x';
    }
    return completedStatus;
  }
}

module.exports = Model;
// console.log(jsonFiles);

//
// console.log(Model.autoIncreament());
