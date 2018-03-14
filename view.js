class View{
    static showHelp(){
        console.log('COMMAND YANG TERSEDIA\n==========================\n\n');
        console.log('node todo.js help');
        console.log('node todo.js list');
        console.log('node todo.js add <task_content>');
        console.log('node todo.js findById <task_id>');
        console.log('node todo.js delete <task_id>');
        console.log('node todo.js complete <task_id>');
        console.log('node todo.js uncomplete <task_id>');
        console.log('node todo.js list:created asc|desc');
        console.log('node todo.js list:completed asc|desc');
        console.log('node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>');
        console.log('node todo.js filter: <tag_name>');
    }

    static showList(list){
        for(let index = 0; index<list.length; index++){
            console.log(list[index]);
        }
    }

    static showConfirm(input){
        console.log(input);
    }
}

module.exports = View
