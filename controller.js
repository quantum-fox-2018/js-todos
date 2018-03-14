var argv = require('./todo.js');
var Model = require('./model.js');
var View = require('./view.js');

class Controller{  

    static check(command, input){
        if(command === undefined || command === 'help'){
            View.showHelp();
        }
        else if(command === 'list'){
            View.showList(Model.getList());
        }
        else if(command === 'add'){
            View.showConfirm(Model.add(input));
        }
        else if(command === 'findById'){
            View.showConfirm(Model.search(input));
        }
        else if(command === 'delete'){
            View.showConfirm(Model.deleteInput(input));
        }
        else if(command === 'complete'){
            View.showList(Model.complete(input));
        }
        else if(command === 'uncomplete'){
            View.showList(Model.uncomplete(input));
        }
        else if(command === 'list:created'){
            View.showList(Model.sortByCreated(input));
        }
        else if(command === 'list:completed'){
            View.showList(Model.sortByCompletion(input));
        }
        else if(command === 'tag'){
            View.showConfirm(Model.addTag(input));
        }
        else if(command === 'filter:'){
            View.showList(Model.filterTag(input));
        }
    }
}


module.exports = Controller;