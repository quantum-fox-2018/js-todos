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
  static readFile(callback){
    fs.readFile('./data.json','UTF-8',(err,data)=>{
      callback(JSON.parse(data))
    })
  }

  static writeFile(data,callback){
    fs.writeFile('./data.json',JSON.stringify(data),'UTF-8',(err)=>{
      if(err) callback(err)

    })
  }

  static help() {
  let arrCommand = ['node todo.js help', 'node todo.js list', 'node todo.js add <task_content>', 'node todo.js findById <task_id>', 'node todo.js delete <task_id>', 'node todo.js complete <task_id>', 'node todo.js uncomplete <task_id>']
    for (let i = 0; i < arrCommand.length; i++) {
      console.log(arrCommand[i]);
    }
  }

  static list(){
    Todo.readFile(function(getData){
      let counter=1
      for (let i = 0; i < getData.length; i++) {
        console.log(counter+'. '+'['+getData[i].complete+'] '+getData[i].task);
        counter++
      }
    })
  }

  static findById(){
    Todo.readFile(function(getData){
      let counter=1
      for (let i = 0; i < getData.length; i++) {
        if(counter===Number(inputContent)){
          console.log(counter+'. '+getData[i].task);
        }
        counter++
      }
    })
  }

  static delete(){
    let arrTask=[]
    Todo.readFile(function(getData){
      let counter=1
      for (let i = 0; i < getData.length; i++) {
        if(counter!==Number(inputContent)){
          arrTask.push(getData[i])
        }
        counter++
      }
      // let taskJson = JSON.stringify(arrTask);
      Todo.writeFile(arrTask,function(err){
        if(err) console.log(err)
        else{
          console.log('sukses');
        }
      });
    })
  }

  static add(){
    let arrTask=[]
    Todo.readFile(function(getData){
      for (let i = 0; i < getData.length; i++) {
        arrTask.push(getData[i])
      }
      let splitTask=inputContent.split(',')
      for (let i = 0; i < splitTask.length; i++) {
        let objTask={}
        objTask['task']=splitTask[i]
        objTask['complete']=' '
        objTask['createdAt']=new Date();
        objTask['tags']=[]
        objTask.completedAt=' '
        arrTask.push(objTask)
      }
      // let taskJson = JSON.stringify(arrTask);
      Todo.writeFile(arrTask,function(err){
        if(err) console.log(err)
        else{
          console.log('sukses');
        }
      });
    })
  }

  static completeTask(){
    let arrTask=[]
    Todo.readFile(function(getData){
      let counter=1
      for (let i = 0; i < getData.length; i++) {
        if(counter===Number(inputContent)){
          getData[i].complete='X'
          getData[i].completedAt=new Date()
        }
        console.log(counter+'. '+'['+getData[i].complete+'] '+getData[i].task);
        arrTask.push(getData[i])
        counter++
      }
      // let taskJson = JSON.stringify(arrTask);
      Todo.writeFile(arrTask,function(err){
        if(err) console.log(err)
        else{
          console.log('sukses');
        }
      });
    })
  }

  static unCompleteTask(){
    let arrTask=[]
    Todo.readFile(function(getData){
      let counter=1
      for (let i = 0; i < getData.length; i++) {
        if(counter===Number(inputContent)){
          getData[i].complete=' '
          getData[i].completedAt=' '
        }
        console.log(counter+'. '+'['+getData[i].complete+'] '+getData[i].task);
        arrTask.push(getData[i])
        counter++
      }
      // let taskJson = JSON.stringify(arrTask);
      Todo.writeFile(arrTask,function(err){
        if(err) console.log(err)
        else{
          console.log('sukses');
        }
      });
    })
  }

  static listCreated(){
    Todo.readFile(function(getData){
      let sortCreated= getData.sort(function(a,b) {return (a.createdAt > b.createdAt) ? 1 : ((b.createdAt > a.createdAt) ? -1 : 0);} );
      if(inputContent==='asc'){
         sortCreated= getData.sort(function(a,b) {return (a.createdAt > b.createdAt) ? 1 : ((b.createdAt > a.createdAt) ? -1 : 0);} );
      }
      else if(inputContent==='desc'){
         sortCreated= getData.sort(function(a,b) {return (a.createdAt > b.createdAt) ? -1 : ((b.createdAt > a.createdAt) ? 1 : 0);} );
      }

      let counter=1
      for (let i = 0; i < sortCreated.length; i++) {
        console.log('['+sortCreated[i].complete+'] '+sortCreated[i].task);
        counter++
      }
    })
  }

  static listCompleted(){
    Todo.readFile(function(getData){
      let sortCompleted= getData.sort(function(a,b) {return (a.completedAt > b.completedAt) ? 1 : ((b.completedAt > a.completedAt) ? -1 : 0);} );
      if(inputContent==='asc'){
         sortCompleted= getData.sort(function(a,b) {return (a.completedAt > b.completedAt) ? 1 : ((b.completedAt > a.completedAt) ? -1 : 0);} );
      }
      else if(inputContent==='desc'){
         sortCompleted= getData.sort(function(a,b) {return (a.completedAt > b.completedAt) ? -1 : ((b.completedAt > a.completedAt) ? 1 : 0);} );
      }

      let counter=1
      for (let i = 0; i < sortCompleted.length; i++) {
        console.log('['+sortCompleted[i].complete+'] '+sortCompleted[i].task);
        counter++
      }
    })
  }

  static tagList(){
    let arrTask=[]
    let arrTag=[]
    let splitTags=inputTag.split(',')
    Todo.readFile(function(getData){
      let counter=1
      for (let i = 0; i < getData.length; i++) {
        if(counter===Number(inputContent)){
          for (let k = 0; k < getData[i].tags.length; k++) {
            arrTag.push(getData[i].tags[k])
          }
        }

        if(counter===Number(inputContent)){
          for (let j = 0; j < splitTags.length; j++) {
            arrTag.push(splitTags[j])
          }
          let uniqueArray = arrTag.filter(function(item, pos) {
              return arrTag.indexOf(item) == pos;
          })
          getData[i].tags=uniqueArray
        }
        arrTask.push(getData[i])
        counter++
      }

      // let taskJson = JSON.stringify(arrTask);
      Todo.writeFile(arrTask,function(err){
        if(err) console.log(err)
        else{
          console.log('sukses');
        }
      });
    })
  }

  static filterList(){
    Todo.readFile(function(getData){
      let counter=1
      let counterFilter=0
      for (let i = 0; i < getData.length; i++) {
        for (var j = 0; j < getData[i].tags.length; j++) {
          if(getData[i].tags[j]===inputContent){
            counterFilter++
          }
        }
        if(counterFilter!==0){
          console.log(counter+'. '+'['+getData[i].complete+'] '+getData[i].task+' ['+getData[i].tags+'] ');
        }

        counter++
        counterFilter=0
      }
    })
  }
}

Todo.command(inputCommand)
