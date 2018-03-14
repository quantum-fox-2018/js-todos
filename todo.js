
const fs = require('fs');
var list = fs.readFileSync('./data.json', 'utf8')
var arrList = JSON.parse(list);

class Todo {
  constructor() {

  }

  help() {
    console.log();
    console.log('   $ node todo.js                              # Will call help');
    console.log('   $ node todo.js help                         # Menampilkan command apa saja yang tersedia');
    console.log('   $ node todo.js list                         # Melihat daftar TODO');
    console.log('   $ node todo.js add <task_content>           # Menambahkan TODO ke dalam list');
    console.log('   $ node todo.js findById <task_id>           # Melihat detail TODO sesuai `task_id` nya');
    console.log('   $ node todo.js delete <task_id>             # Menghapus TODO sesua `task_id` nya');
    console.log('   $ node todo.js complete <task_id>           # Manandai status TODO selesai');
    console.log('   $ node todo.js uncomplete <task_id>         # Menandai status TODO belum selesai');
    console.log();
  }

  list() {
    for (var i = 0; i < arrList.length; i++) {
      console.log(`${arrList[i].task_id}. ${arrList[i].status} ${arrList[i].task}`);
    }
  }

  addList(task) {
    arrList.push(new List(arrList.length+1, task))
    console.log(`Added "${task}" to your TODO list. . .`);

    fs.writeFileSync('./data.json', JSON.stringify(arrList, null, 2))
  }

  findById(id) {
    let found = ''
    for (var i = 0; i < arrList.length; i++) {
      // console.log(typeof arrList[i].task_id);
      if (arrList[i].task_id === id) {
        found += `${arrList[i].task_id}. ${arrList[i].status} ${arrList[i].task}`
      }
    }
    // console.log(id);
    console.log(found);
  }

  hapus(id) {
    let terhapus = ''
    let index = 0
    for (var i = 0; i < arrList.length; i++) {
      // console.log(typeof arrList[i].task_id);
      if (arrList[i].task_id === id) {
        terhapus += `Deleted "${arrList[i].task}" from your TODO list. . .`
        index += i
      }
    }
    console.log(terhapus);
    arrList.splice(index, 1)
    fs.writeFileSync('./data.json', JSON.stringify(arrList, null, 2))
  }

  complete(id) {
    for (var i = 0; i < arrList.length; i++) {
      if (arrList[i].task_id === id) {
        arrList[i].status = "[X]"
      }
    }
    fs.writeFileSync('./data.json', JSON.stringify(arrList, null, 2))
  }

  uncomplete(id) {
    for (var i = 0; i < arrList.length; i++) {
      if (arrList[i].task_id === id) {
        arrList[i].status = "[ ]"
      }
    }
    fs.writeFileSync('./data.json', JSON.stringify(arrList, null, 2))
  }
}

class List {
  constructor(task_id, task) {
    this.task_id = task_id
    this.task = task
  }
}

let todo = new Todo()


var argv = process.argv
if (argv[2] === 'help' || argv[2] === undefined) {
  todo.help()
} else if (argv[2] === 'list') {
  todo.list()
} else if (argv[2] === 'add') {
  let task = ''
  for (var i = 3; i < argv.length; i++) {
    task += argv[i]
    if (i !== argv.length-1) {
      task += ' '
    }
  }
  todo.addList(task)
} else if (argv[2] === 'findById') {
  todo.findById(Number(argv[3]))
} else if (argv[2] === 'delete') {
  todo.hapus(Number(argv[3]))
} else if (argv[2] === 'complete') {
  todo.complete(Number(argv[3]))
  todo.list()
} else if (argv[2] === 'uncomplete') {
  todo.uncomplete(Number(argv[3]))
  todo.list()
}
