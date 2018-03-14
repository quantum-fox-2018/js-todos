class TodoViews {
    constructor(){

    }

    static help(){
        console.log('nodejs todo.js')
        console.log('nodejs todo.js help')
        console.log('nodejs todo.js list')
        console.log('nodejs todo.js add <task_content>')
        console.log('nodejs todo.js findById <task_id>')
        console.log('nodejs todo.js delete <task_id>')
        console.log('nodejs todo.js complete <task_id>')
        console.log('nodejs todo.js uncomplete <task_id>')
    }

    static list(data){
        console.log('Dapet data nih dari Model')
        let no = 1;
        for(let i=0; i<data.length; i++){
            if(data[i].status == true){
                console.log(`${data[i].id} [x] ${data[i].task}`)
            } else {
                console.log(`${data[i].id} [ ] ${data[i].task}`)
            }
            no++;
        }
    }

    static notificationAdd(dataNotif){
        console.log(`Added "${dataNotif}" to your TOTO list...`)
    }

    static findById(dataById){
        console.log(dataById)
    }

    static notificationDelete(dataNotif){
        console.log(`Deleteed "${dataNotif}" from your TODO list...`)
    }

    static listCompleted(dataCompleted){
        let no = 1;
        for(let i=0; i<dataCompleted.length; i++){
            console.log(`${no} ${dataCompleted[i].task}`)
            no++;
        }
    }

}

module.exports = TodoViews;