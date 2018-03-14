"use strict"

const controller = require('./controller.js');

switch(process.argv[2]){
  case 'help' :
    controller.getHelp();
    break;
  case 'list' :
      controller.getToDos();
    break;
  case 'add' :
      (process.argv[3]) ? controller.addToDo(process.argv[3]) : console.log('Tolong isi deskripsi to-do yang ingin disimpan');
    break;
  case 'findById' :
    (process.argv[3]) ? controller.findToDo(process.argv[3]) : console.log('Tolong isi id to-do yang ingin dicari');
    break;
  case 'delete' :
    (process.argv[3]) ? controller.deleteToDo(process.argv[3]) : console.log('Tolong isi id to-do yang ingin dihapus');
    break;
  case 'complete' :
    (process.argv[3]) ? controller.markToDo(process.argv[3],'complete') : console.log('Tolong isi id to-do yang ingin di tandai selesai');
    break;
  case 'uncomplete' :
    (process.argv[3]) ? controller.markToDo(process.argv[3],'uncomplete') : console.log('Tolong isi id to-do yang ingin di tandai belum selesai');
    break;
  case 'list:created' :
    controller.getToDos('date',process.argv[3]);
    break;
  case 'list:complete' :
    controller.getToDos('complete',process.argv[3]);
    break;
  case 'tag' :
    (process.argv[3]) ? controller.addToDoTag(process.argv) : console.log('Tolong isi tag to-do yang ingin disimpan');
    break;
  case 'filter' :
    (process.argv[3]) ? controller.getToDos('filter', process.argv[3]) : console.log('Tolong isi tag to-do yang ingin disimpan');
    break;
}
