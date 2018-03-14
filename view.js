class View{

  static helpCommand(commandArgv){
    let listCommand = ['','help','list','add <task_content>','findById <task_id>','delete <task_id>','complete <task_id>','uncomplete <task_id>']

    if(commandArgv == undefined){
      console.log("# will call help");
    }
    for(let i=0;i<listCommand.length;i++){
      console.log(`$ node todo.js ${listCommand[i]}`);
    }
  }

  static listCommand(listData){
    for(let i=0;i<listData.length;i++){
      console.log(`${listData[i].id}. [${listData[i].status}] ${listData[i].activity}`);
    }
  }

  static addCommand(newData){
    console.log(`Added ${newData} to your TODO list `);
  }
  static findCommand(findedData){
    console.log(`${findedData.id}. ${findedData.activity}`);
  }
  static deleteCommand(deleteData){
    console.log(`Deleted ${deleteData} from your TODO list`);
  }
}

module.exports = View;
