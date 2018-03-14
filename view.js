const fs = require('fs')
const Table = require('cli-table')

const dataJson = fs.readFileSync('./data.json')

class ViewTodo {
    constructor() {
        
    }

    static viewList(){
        
        let tasklist = JSON.parse(dataJson)
        let table = new Table({
            head: ['Task ID','Status', 'Task Name'],
            colWidths: [10, 15 ,40]
        })
        
        for(let i=0; i<tasklist.length; i++){
            table.push([tasklist[i].id,
                tasklist[i].status,
                tasklist[i].task])
        }
        console.log(table.toString())
    }

    static viewId(data){
        let table = new Table({
            head: ['Task ID','Status', 'Task Name'],
            colWidths: [10, 15 ,40]
        })
        table.push([data.id,
            data.status,
            data.task])
        
        console.log(table.toString())
    }

}

// ViewTodo.viewList()
module.exports = ViewTodo