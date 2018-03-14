"use strict"
const fs = require('fs');

class Model {
    static showList() {
        let dataString = fs.readFileSync('data.json', 'utf-8');
        let dataArrayOfObject = JSON.parse(dataString);
        return dataArrayOfObject;
    }

    static writeList(object) {
        let dataStr = JSON.stringify(object);
        fs.writeFileSync('data.json', dataStr, 'utf-8');
    }

    static addList(writeTodo) {
        let arrayObject = Model.showList();
        let addId = arrayObject.length + 1;
        let objTodo = {
            id: addId,
            todo: writeTodo,
            complete: false
        };

        arrayObject.push(objTodo);
        Model.writeList(arrayObject);
    }

    static findById(findId) {
        let arrayObject = Model.showList();
        let result;
        for (let i = 0; i < arrayObject.length; i++) {
            if (arrayObject[i].id === parseInt(findId)) {
                result = arrayObject[i];
            }
        }

        return result;
    }

    static deleteById(findId) {
        let arrayObject = Model.showList();
        let newArrayObj = [];
        for (let i = 0; i < arrayObject.length; i++) {
            if (arrayObject[i].id !== parseInt(findId)) {
                newArrayObj.push(arrayObject[i]);
            }
        }

        Model.writeList(newArrayObj);
        return newArrayObj;
    }

    static completeById(findId) {
        let arrayObject = Model.showList();

        for (let i = 0; i < arrayObject.length; i++) {
            if (arrayObject[i].id === parseInt(findId)) {
                arrayObject[i].complete = true;
            }
        }

        Model.writeList(arrayObject);
        return arrayObject;
    }

    static uncompleteById(findId) {
        let arrayObject = Model.showList();

        for (let i = 0; i < arrayObject.length; i++) {
            if (arrayObject[i].id === parseInt(findId)) {
                arrayObject[i].complete = false;
            }
        }

        Model.writeList(arrayObject);
        return arrayObject;
    }
}

module.exports = Model;