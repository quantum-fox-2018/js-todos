const argv = process.argv

class ToDoView {
  static help(input){
    console.log(`node todo.js help`);
    console.log(`node todo.js list`);
    console.log(`node todo.js add <task_content>`);
    console.log(`node todo.js findById <task_id>`);
    console.log(`node todo.js delete <task_id>`);
    console.log(`node todo.js complete <task_id>`);
    console.log(`node todo.js uncomplete <task_id>`);
    console.log(`node todo.js list:created asc|desc`);
    console.log(`node todo.js list:completed asc|desc`);
  }

  static list(input){
    for(let i=0; i<input.length; i++){
      console.log(`${i+1}. ${input[i].status} ${input[i].task}`);
    }
  }

  static add(input){
    console.log(`Data '${input}' telah dimasukkan ke dalam To Do List`);
  }

  static findById(num,input){
    for(let i=0; i<input.length; i++){
      if(input[i].id==num){
        console.log(`${i+1}. ${input[i].status} ${input[i].task}`)
      }
    }
  }

  static delete(input){
    console.log(`Data '${input.task}' telah dihapus dari To Do List`)
  }

  static complete(input){
    console.log(`Data ke-${input} telah selesai dikerjakan`)
  }

  static uncomplete(input){
    console.log(`Data ke-${input} belum selesai!`)
  }

  static listCreated(input){
    if(argv[3]=='asc'){
      for(let i=0; i<input.length; i++){
        console.log(`${i+1}. ${input[i].status} ${input[i].task}`);
      }
    } else if(argv[3]=='desc') {
      for(let i=input.length-1; i>=0; i--){
        console.log(`${i+1}. ${input[i].status} ${input[i].task}`);
      }
    }
  }

  static listCompleted(input){
    if(argv[3]=='asc'){
      for(let i=0; i<input.length; i++){
        console.log(`${i+1}. ${input[i].status} ${input[i].task}`);
      }
    } else if(argv[3]=='desc') {
      for(let i=input.length-1; i>=0; i--){
        console.log(`${i+1}. ${input[i].status} ${input[i].task}`);
      }
    }
  }

  static tags(name,tags){
    let result = tags.join(' ')
    console.log(`Tagged task '${name}' with tags: ${result}`)
  }

  static filter(input){
    for(let i=0; i<input.length; i++){
      console.log(`${input[i].id}. ${input[i].task} [${input[i].tags}]`)
    }
  }
}

module.exports = ToDoView;
