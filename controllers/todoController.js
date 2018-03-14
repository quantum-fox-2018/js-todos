const TodoModels = require('../models/todoModel')
const TodoViews = require('../views/todoView')

var models = new TodoModels();
var views = new TodoViews();


class TodoController {
    static manageComand(command, option){
        switch (command) {
            case 'help':
                TodoViews.help();
                break;
            case 'list':
                let dataList = models.list();
                TodoViews.list(dataList);
                break;
            case 'add':
                let dataNotif = models.add(option);
                TodoViews.notificationAdd(dataNotif);
                break;
            case 'findById':
                let dataById = models.findId(option);
                TodoViews.findById(dataById);
                break;
            case 'delete':
                let deleteById = models.delete(option);
                TodoViews.notificationDelete(deleteById)
                break;
            case 'complete':
                let checklist = models.complete(option)
                TodoViews.list(checklist)
                break;
            case 'uncomplete':
                let unChecklist = models.uncomplete(option)
                TodoViews.list(unChecklist)
                break;
            case 'list:completed':
                let completedTask = models.completed()
                TodoViews.listCompleted(completedTask)
                break;
            default:
            console.log('ini default')
                break;
        }
    }
}

module.exports = TodoController;