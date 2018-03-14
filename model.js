const fs = require('fs')

const dataJson = fs.readFileSync('./data.json')
var tasklist = JSON.parse(dataJson)

class ModelTodo {
    constructor() {
        
    }

    static addList(taskName){
        let newId = tasklist.length+1
        // let newId = Number(tasklist[tasklist.length-1].id)+1
        
        let newTask = {
            id: newId,
            status: 'uncomplete',
            task: taskName
        }

        tasklist.push(newTask)
        let taskJson = JSON.stringify(tasklist, null, 2)
        fs.writeFileSync('./data.json',taskJson)

        console.log(`Your Task :'${newTask.task}' has been saved`)
    }

    static findId(id){
        if(id > tasklist.length){
            console.log('Task ID',id,'Not Found')
            process.exit()
        } else {
            for(let i=0; i<tasklist.length; i++){
                if(tasklist[i].id == id){
                    return tasklist[i]
                }
            }
        }
    }

    static deleteTask(id){
        let taskData = []
        let count = 1

        if(id > tasklist.length){
            console.log('Task ID',id,'Not Found')
        } else {
            for(let i=0; i<tasklist.length; i++){
                if(tasklist[i].id != id){
                    tasklist[i].id = count++
                    taskData.push(tasklist[i])
                }
            }
            let taskJson = JSON.stringify(taskData, null, 2)
            fs.writeFileSync('./data.json',taskJson)
            // console.log(taskJson)
            console.log(`Your Task ID ${id} has been deleted`)
        }

    }

    static taskCompleted(id){

        if(id > tasklist.length){
            console.log('Task ID',id,'Not Found')
        } else {
            for(let i=0; i<tasklist.length; i++){
                if(tasklist[i].id == id){
                    tasklist[i].status = 'completed'
                }
                
            }
            let taskJson = JSON.stringify(tasklist, null, 2)
            fs.writeFileSync('./data.json',taskJson)
            // console.log(taskJson) 
        }
    }

    static taskUncomplete(id){
        if(id > tasklist.length){
            console.log('Task ID',id,'Not Found')
        } else {
            for(let i=0; i<tasklist.length; i++){
                if(tasklist[i].id == id){
                    tasklist[i].status = 'uncomplete'
                }
                
            }
            let taskJson = JSON.stringify(tasklist, null, 2)
            fs.writeFileSync('./data.json',taskJson)
        }
    }


}

// ModelTodo.deleteTask(2)

module.exports = ModelTodo;