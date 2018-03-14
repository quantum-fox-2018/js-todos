"use strict"
const View = require('./view.js');
const Model = require('./model.js');

class Controller {
    static getHelp() {
        View.help();
    }

    static getList() {
        let dataList = Model.showList()
        View.list(dataList);
    }

    static getListOfData(createList) {
        let add = Model.addList(createList);
        View.addingList(add)
    }

    static findId(id) {
        let find = Model.findById(id);
        View.findList(find);
    }

    static delete(id) {
        let dlt = Model.deleteById(id);
        View.dltView(dlt);
    }

    static complete(id) {
        let cmplt = Model.completeById(id);
        View.list(cmplt);
    }

    static uncomplete(id) {
        let uncmplt = Model.uncompleteById(id);
        View.list(uncmplt);
    }
}

module.exports = Controller;