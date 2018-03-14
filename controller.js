const View = require('./view.js')
const Model = require('./model.js')

class Controller {
  static acceptCommand(command){
    if (!command[2]) {
      command.push("help")
    }
    let splittedCommand = command[2].split(":")
    command[2] = splittedCommand[0]

    if (command[2].toLowerCase() === "help") {
      Controller.displayHelp()
    }else if(command[2].toLowerCase() === "add"){
      let todo = ""
      for (var i = 3; i < command.length; i++) {
        todo += command[i] +" "
      }
      Controller.addTodo(todo)
    }else if(command[2].toLowerCase() === "list" || command[2].toLowerCase() === "list:created"){
      Controller.displayTodo(command[3])
    }else if(command[2].toLowerCase() === "findbyid"){
      Controller.findById(command[3])
    }else if(command[2].toLowerCase() === "delete"){
      Controller.delete(command[3])
    }else if(command[2].toLowerCase() === "complete"){
      Controller.checkCompleteStatus("check", command[3])
    }else if(command[2].toLowerCase() === "uncomplete"){
      Controller.checkCompleteStatus("uncheck", command[3])
    }else if(command[2].toLowerCase() === "list:completed"){
      Controller.displayCompletedTodo(command[3])
    }else if(command[2].toLowerCase() === "tag"){
      let tags = []
      for (var i = 4; i < command.length; i++) {
        tags.push(command[i])
      }
      Controller.addTags(command[3], tags)
    }else if(command[2].toLowerCase() === "filter"){
      Controller.filter(splittedCommand[1])
    }else{
      Controller.displayWrongInfo()
    }
  }

  static addTags(id, tags){
    let info = Model.addTags(id, tags)
    View.display(info)
  }

  static filter(tag){
    let info = Model.filter(tag)
    View.display(info)
  }

  static displayCompletedTodo(order){
    let info = Model.displayCompletedTodo(order)
    View.display(info)
  }

  static checkCompleteStatus(doWhat, id){
    let result = Model.checkCompleteStatus(doWhat, id)
    if (!result) {
      Controller.displayTodo()
    }else{
      View.display(result)
    }
  }


  static displayHelp(){
    let info = ""
    let infos = []
    infos.push("node todo.js")
    infos.push("node todo.js help")
    infos.push("node todo.js list [asc/desc] or list:created [asc/desc]")
    infos.push("node todo.js list:completed [asc/desc]")
    infos.push("node todo.js add <task_content>")
    infos.push("node todo.js tag <task_id> <tag1> <tag2> <tag3>")
    infos.push("node todo.js filter:<desired tag>")
    infos.push("node todo.js findById <task_id>")
    infos.push("node todo.js delete <task_id>")
    infos.push("node todo.js complete <task_id>")
    infos.push("node todo.js uncomplete <task_id>")
    info = infos.join("\n")
    View.display(info)
  }

  static delete(id){
    let info = Model.deleteTodo(id)
    View.display(info)
  }

  static addTodo(todo){
    let info = Model.addTodo(todo)
    View.display(info)
  }

  static displayTodo(order){
    let info = Model.displayTodo(order)
    View.display(info)
  }

  static displayWrongInfo(){
    View.display("WRONG COMMAND, PLEASE TYPE HELP TO GET THE LIST")
  }

  static findById(id){
    let info = Model.findById(id)
    View.display(info)
  }
}

module.exports = Controller
