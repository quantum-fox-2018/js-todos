const ViewTodo = require('./view.js')


class ControllTodo {
    constructor() {

    }

    static checkSyntax(syntax, value){
        switch(syntax){
            default:
                console.log('you will can "help"')
                break;
            case 'help':
                let listSyntax = [
                    '$ node todo.js help',
                    '$ node todo.js list',
                    '$ node todo.js add <task_content>',
                    '$ node todo.js findById <task_id>',
                    '$ node todo.js delete <task_id>',
                    '$ node todo.js complete <task_id>',
                    '$ node todo.js uncomplete <task_id>'
                ]
                listSyntax = listSyntax.join('\n')
                console.log(listSyntax);
                break;

            case 'list':
                ViewTodo.viewList()
                break;
            
            case 'add':
                console.log('menambahkan task')
                break;
            case 'findById':
                console.log('mencari task by ID')
                break;
            case 'delete':
                console.log('menghapus task id')
                break;
            case 'complete':
                console.log('merubah status task jadi complete')
                break;
            case 'uncomplete':
                console.log('merubah status task jadi uncomplete')
                break;
        }   
    }

}


module.exports = ControllTodo