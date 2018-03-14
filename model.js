var Controller = require('./Controller.js');
var fs = require('fs');

class List{
    constructor(id, task, status, date){
        this.id = id;
        this.task = task;
        this.status = status;
        this.date = date;
        this.tags = [];
    }
}

class Model{
    static getJSON_data(){
        var data = fs.readFileSync('data.json', 'utf8');
        return JSON.parse(data);
    }

    static getList(){
        let processedData = Model.getJSON_data();
        let resultArr = [];
        for(let index =0; index<processedData.length; index++){
            let statusBox = '[ ]'
            if(processedData[index].status == 'true'){
                statusBox = '[x]'
            }
            resultArr.push(`${processedData[index].id}. ${statusBox}  ${processedData[index].task}, Time created: ${processedData[index].date}`);
        }
        return resultArr;
    }

    static add(input){ 
        let processedData = Model.getJSON_data();
        let id = 0;
        if(processedData.length === 0){
            id = 1;
        }else{
            id = parseInt(processedData[processedData.length-1].id) + 1;
        }

        var date = new Date();

        let result = new List(id.toString(), input.toString(), 'false', date);
        processedData.push(result);
        
        fs.writeFileSync('data.json', JSON.stringify(processedData), 'utf8');
        return `Added ${input} to your TODO list...`;
    }

    static search(input){
        let processedData = Model.getJSON_data();
        let statusBox = '[ ]';
        for(let index =0; index<processedData.length; index++){
            if(processedData[index].id === input){
                if(processedData[index].status === 'true'){
                    statusBox = '[x]'
                }
                return `${processedData[index].id}. ${statusBox}  ${processedData[index].task}`;
            }
        }
        return 'No match found!'
    }

    static complete(input){
        let processedData = Model.getJSON_data();
        for(let index =0; index<processedData.length; index++){
            if(processedData[index].id === input){
                processedData[index].status = 'true';
            }
        }
        fs.writeFileSync('data.json', JSON.stringify(processedData), 'utf8');
        return Model.getList();
    }

    static uncomplete(input){
        let processedData = Model.getJSON_data();
        for(let index =0; index<processedData.length; index++){
            if(processedData[index].id === input){
                processedData[index].status = 'false';
            }
        }
        fs.writeFileSync('data.json', JSON.stringify(processedData), 'utf8');
        return Model.getList();
    }

    static deleteInput(input){
        let processedData = Model.getJSON_data();
        let resultArr = [];
        let deletedData = ''
        for(let index =0; index<processedData.length; index++){
            if(processedData[index].id === input){
                deletedData = `Deleted ${processedData[index].task} from your TODO list...`
                continue
            }else{
                resultArr.push(processedData[index]);
            }
        }
        fs.writeFileSync('data.json', JSON.stringify(resultArr), 'utf8');

        return deletedData;
    }

    static sortByCreated(order){
        let theData = Model.getJSON_data();
        let resultArr = [];

        if(order === 'asc' || order === undefined){
            theData.sort((a, b) => new Date(a.date) - new Date(b.date));
            
        }
        else if(order === 'desc'){
            theData.sort((a, b) => new Date(a.date) - new Date(b.date)).reverse();
        }

        for(let index =0; index<theData.length; index++){
            let statusBox = '[ ]'
            if(theData[index].status === 'true'){
                statusBox = '[x]'
            }
            resultArr.push(`${theData[index].id}. ${statusBox}  ${theData[index].task}, Time created: ${theData[index].date}`);
        }

        return resultArr;
    }

    static sortByCompletion(order){
        let theData = Model.getJSON_data();
        let newArr = [];

        for(let index =0; index<theData.length; index++){
            if(theData[index].status === 'true'){
                newArr.push(theData[index])
            }
        }

        if(order === 'asc' || order === undefined){
            newArr.sort((a, b) => new Date(a.date) - new Date(b.date));
        }else if(order === 'desc'){
            newArr.sort((a, b) => new Date(a.date) - new Date(b.date)).reverse();
        }

        let resultArr = [];
        for(let index =0; index<newArr.length; index++){
            let statusBox = '[ ]'
            if(newArr[index].status == 'true'){
                statusBox = '[x]'
            }
            resultArr.push(`${newArr[index].id}. ${statusBox}  ${newArr[index].task}, Time created: ${newArr[index].date}`);
        }

        return resultArr;
    }

    static addTag(input){
        let theData = Model.getJSON_data();

        let inputArr = input.split(' ');
        let inputId = inputArr[0].toString();
        let inputTags = inputArr.slice(1,inputArr.length);

        for(let index =0; index<theData.length; index++){
            if(theData[index].id == inputId){
                theData[index].tags = inputTags;
            }
        }

        fs.writeFileSync('data.json', JSON.stringify(theData), 'utf8');

        return `Tags ${inputTags.join(',')} has been inserted`
    }

    static filterTag(input){
        let theData = Model.getJSON_data();

        let resultArr = [];
        let inputArr = input.split(' ');

        for(let indexInput = 0; indexInput<inputArr.length; indexInput++){
            for(let indexData = 0; indexData<theData.length; indexData++){
                for(let indexTags = 0; indexTags<theData[indexData].tags.length; indexTags++){
                    if(inputArr[indexInput] == theData[indexData].tags[indexTags] && !resultArr.includes(theData[indexData])){
                        resultArr.push(theData[indexData])
                    }
                }
            }
        }
        
        return resultArr;
    }
}

module.exports = Model;