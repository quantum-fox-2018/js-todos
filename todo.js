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
      (process.argv[3]) ? controller.addToDo(process.argv[3]) : console.log('Tolong deskripsi to-do yang ingin disimpan');
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
}
