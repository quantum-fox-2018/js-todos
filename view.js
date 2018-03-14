const fs = require('fs')
const Table = require('cli-table')


class ViewTodo {
    constructor() {
        
    }

    static viewList(){
        let dataJson = fs.readFileSync('./data.json')
        let tasklist = JSON.parse(dataJson)
        let table = new Table({
            head: ['Task ID', 'Task Name'],
            colWidths: [15, 40]
        })
        
        for(let i=0; i<tasklist.length; i++){
            table.push([tasklist[i].id,
            tasklist[i].task])
        }
        console.log(table.toString())
    }

}

ViewTodo.viewList()
module.exports = ViewTodo