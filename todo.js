const argv = process.argv
const fs = require('fs')
let inputCommand=argv[2]
let inputContent=argv[3]
let inputTag=argv[4]


class Todo{
  constructor(){

  }

  static command(inputCommand){
    if(inputCommand==='help'){
      Todo.help()
    }
    else if(inputCommand==='list'){
      Todo.list()
    }
    else if(inputCommand==='add'){
      Todo.add(inputContent)
    }
    else if(inputCommand==='findById'){
      Todo.findById()
    }
    else if(inputCommand==='delete'){
      Todo.delete()
    }
    else if(inputCommand==='complete'){
      Todo.completeTask()
    }
    else if(inputCommand==='uncomplete'){
      Todo.unCompleteTask()
    }
    else if(inputCommand==='list:created'){
      Todo.listCreated()
    }
    else if(inputCommand==='list:completed'){
      Todo.listCompleted()
    }
    else if(inputCommand==='tag'){
      Todo.tagList()
    }
    else if(inputCommand==='filter'){
      Todo.filterList()
    }
  }

}

Todo.command(inputCommand)
