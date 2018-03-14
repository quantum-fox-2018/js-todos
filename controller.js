const ViewTodo = require('./view.js')
const ModelTodo = require('./model.js')


class ControllTodo {
    constructor() {

    }

    static checkSyntax(syntax, value){
        let task = value.join(' ')
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
                ModelTodo.addList(task)
                break;
            case 'findById':
                let data = ModelTodo.findId(task)
                ViewTodo.viewId(data)
                
                break;
            case 'delete':
                ModelTodo.deleteTask(task)
                break;
            case 'complete':
                ModelTodo.taskCompleted(task)
                break;
            case 'uncomplete':
                ModelTodo.taskUncomplete(task)
                break;
        }   
    }

}


module.exports = ControllTodo