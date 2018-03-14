const fs = require('fs');

const TodoViews = require('../views/todoView')

class TodoModels {
    constructor(){
        this._dataJson = fs.readFileSync('./data.json', 'utf-8');
    }

    list() {
        let dataJson = JSON.parse(this._dataJson)
        return dataJson;
    }

    add(value) {
        let dataJson = JSON.parse(this._dataJson)
      
        let nextId;
        if(dataJson.length == 0){
            nextId = 1;
        } else {
            nextId = (dataJson[dataJson.length-1].id) + 1
        }
        
        let obj = {
            id: nextId,
            task: value,
            status: false,
            date: new Date()
        };
        dataJson.push(obj);
        
        let newData = JSON.stringify(dataJson, null, 2)
        fs.writeFileSync('./data.json', newData)
        return value;
    }

    findId(id){
        let dataJson = JSON.parse(this._dataJson);
        
        for(let i=0; i<dataJson.length; i++){
            if(dataJson[i].id == id){
                return `${dataJson[i].id} ${dataJson[i].task}`
            }
        }
    }

    delete(id){
        let dataJson = JSON.parse(this._dataJson)
        let arr = [];
        let dataForNotif = '';
        for(let i=0; i<dataJson.length; i++){
            if(dataJson[i].id != id){
                let obj = {
                    id: dataJson[i].id,
                    task: dataJson[i].task,
                    status: dataJson[i].status,
                    date: dataJson[i].date
                };
                arr.push(obj)
            } else {
                dataForNotif += dataJson[i].task
            }
        }

        let newData = JSON.stringify(arr, null, 2)
        fs.writeFileSync('./data.json', newData);
        return dataForNotif;
    }

    complete(id){
        let dataJson = JSON.parse(this._dataJson)
        let arr = [];
        
        for(let i=0; i<dataJson.length; i++){
            if(dataJson[i].id == id){
                dataJson[i].status = true;
            }
            let obj = {
                id: dataJson[i].id,
                task: dataJson[i].task,
                status: dataJson[i].status,
                date: dataJson[i].date
            };
            arr.push(obj);
        }

        let newData = JSON.stringify(arr, null, 2);
        fs.writeFileSync('./data.json', newData);
        return dataJson;
    }

    uncomplete(id){
        let dataJson = JSON.parse(this._dataJson)
        let arr = [];
        
        for(let i=0; i<dataJson.length; i++){
            if(dataJson[i].id == id){
                dataJson[i].status = false;
            }
            let obj = {
                id: dataJson[i].id,
                task: dataJson[i].task,
                status: dataJson[i].status,
                date: dataJson[i].date
            };
            arr.push(obj);
        }

        let newData = JSON.stringify(arr, null, 2);
        fs.writeFileSync('./data.json', newData);
        return dataJson;
    }

    completed(){
        let dataJson = JSON.parse(this._dataJson)

        let dataComplete = [];
        for(let i=0; i<dataJson.length; i++){
            if(dataJson[i].status == true){
                let obj = {
                    id: dataJson[i].id,
                    task: dataJson[i].task,
                    status: dataJson[i].status,
                    date: dataJson[i].date
                };
                dataComplete.push(obj)
            }
        }
        return dataComplete;

    }

    

}


module.exports = TodoModels



