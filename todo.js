let argv = process.argv;

const TodoController = require('./controllers/todoController')

let command = argv[2];
let option = argv[3];

if(command != null){
    TodoController.manageComand(command, option);
} else {
    console.log('Selamat datang di aplikasi JS Todos');
    console.log('nodejs todo.js help -- untuk memlilih menu');
}
