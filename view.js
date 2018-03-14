"use strict"
const Controller = require('./controller.js');

class View {
    static help() {
        console.log('$ node todo.js\n$ node todo.js help\n$ node todo.js list\n$ node todo.js add <task_content>\n$ node todo.js findById <task_id>\n$ node todo.js delete <task_id>\n$ node todo.js complete <task_id>\n$ node todo.js uncomplete <task_id>');
    }

    static list(resultData) {
        console.log('To do list:')
        for (let i = 0; i < resultData.length; i++) {
            if (resultData[i].complete === true) {
                console.log(`${resultData[i].id}. [x] ${resultData[i].todo}`);
            } else {
                console.log(`${resultData[i].id}. [ ] ${resultData[i].todo}`);
            }
        }
    }

    static addingList() {
        console.log('List has been added');
    }

    static findList(finId) {
        console.log(`${finId.id}. ${finId.todo}`);
    }

    static dltView(resultData) {
        console.log('To do list:')
        for (let i = 0; i < resultData.length; i++) {
            console.log(`${resultData[i].id}. ${resultData[i].todo}`);
        }
    }
}

module.exports = View;