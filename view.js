// const Controller = require('./controller.js');

class View{
  static displayHelp(){
    let helpCommands = ['$ node todo.js','$ node todo.js help','$ node todo.js list','$ node todo.js add <task_content>','$ node todo.js findById <task_id>','$ node todo.js delete <task_id>','$ node todo.js complete <task_id','$ node todo.js uncomplete <task_id>']

    for(let i=0; i<helpCommands.length; i++){
      console.log(helpCommands[i])
    }
  }

  static displayLis(read){
    let lis = read
    for(let i=0; i<lis.length; i++){
      console.log(`${i+1}. ${lis[i].task}`)
    }
  }
}

module.exports = View
