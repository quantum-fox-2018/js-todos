const ToDoView = require('./ToDoView')
const fs = require('fs')
const argv = process.argv

class ToDoModel {
  static help(){
    ToDoView.help()
  }

  static list(callback){
    fs.readFile('./todolist.json','utf8',(err,data) => {
      let toDoList = JSON.parse(data)
      callback(toDoList);
    })
  }
  static add(callback){
    fs.readFile('./todolist.json','utf8',(err,data) => {
      let toDoList = JSON.parse(data)
      toDoList.push({status:'[ ]', task:argv[3], createdAt: new Date(), completedAt: new Date()})
      let newToDoList = JSON.stringify(toDoList,null,2)
      fs.writeFile('./todolist.json',newToDoList,(err) => {
        if (err) throw err
        callback(argv[3])
      })
    })
  }

  static findById(callback){
    fs.readFile('./todolist.json','utf8',(err,data) => {
      let toDoList = JSON.parse(data)
      callback(argv[3],toDoList)
    })
  }

  static delete(callback){
    fs.readFile('./todolist.json','utf8',(err,data) => {
      let toDoList = JSON.parse(data)
      let newArray = [];
      for(let i=0; i<toDoList.length; i++){
        if((i+1).toString()==argv[3]){
          var erasedData = toDoList[i]
          newArray.push(toDoList[i])
          newArray.pop()
        } else {
          newArray.push(toDoList[i])
        }
      }
      let newToDoList = JSON.stringify(newArray,null,2)
      fs.writeFile('./todolist.json',newToDoList,(err) => {
        if (err) throw err
        callback(erasedData)
      })
    })
  }

  static complete(callback){
    fs.readFile('./todolist.json','utf8',(err,data) => {
      let toDoList = JSON.parse(data)
      for(let i=0; i<toDoList.length; i++){
        if((i+1).toString()==argv[3]){
          toDoList[i].status = '[X]'
          toDoList[i].completedAt = new Date()
        }
      }
      let newToDoList = JSON.stringify(toDoList,null,2)
      fs.writeFile('./todolist.json',newToDoList,(err) => {
        if (err) throw err
        callback(argv[3])
      })
    })
  }

  static uncomplete(callback){
    fs.readFile('./todolist.json','utf8',(err,data) => {
      let toDoList = JSON.parse(data)
      for(let i=0; i<toDoList.length; i++){
        if((i+1).toString()==argv[3]){
          toDoList[i].status = '[ ]'
        }
      }
      let newToDoList = JSON.stringify(toDoList,null,2)
      fs.writeFile('./todolist.json',newToDoList,(err) => {
        if (err) throw err
        callback(argv[3])
      })
    })
  }

  static listCreated(callback){
    fs.readFile('./todolist.json','utf8',(err,data) => {
      let toDoList = JSON.parse(data)
      for(let i=1; i<toDoList.length; i++){
        for(let j=0; j<=i-1; j++){
          let front = toDoList[j]
          let back = toDoList[i]
          if(toDoList[i].createdAt<toDoList[j].createdAt){
            toDoList[i] = front
            toDoList[j] = back
          }
        }
      }
      callback(toDoList)
    })
  }

  static listCompleted(callback){
    fs.readFile('./todolist.json','utf8',(err,data) => {
      let toDoList = JSON.parse(data)
      let completedTask = []
      for(let i=0; i<toDoList.length; i++){
        if(toDoList[i].status=='[X]'){
          completedTask.push(toDoList[i])
        }
      }
      for(let i=1; i<completedTask.length; i++){
        for(let j=0; j<=i-1; j++){
          let front = completedTask[j]
          let back = completedTask[i]
          if(completedTask[i].completedAt<completedTask[j].completedAt){
            completedTask[i] = front
            completedTask[j] = back
          }
        }
      }
      callback(completedTask)
    })
  }
}

module.exports = ToDoModel;
