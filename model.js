const fs = require('fs');

class Model{
  static readData(){
    let listData = JSON.parse(fs.readFileSync('data.json','utf8'));
    return listData;
  }
  static addData(activity){

    let listData = Model.readData();
    let newObject = {id:(parseInt(listData[listData.length-1].id)+1).toString(),activity:activity,status:" "};
    listData.push(newObject);
    Model.writeData(JSON.stringify(listData));

  }

  static writeData(listData){
    fs.writeFileSync('data.json',listData,'utf8');
  }

  static findData(findValue){
    let listData = Model.readData();
    for(let i=0;listData.length;i++){
      if(listData[i].id === findValue){
        return listData[i];
      }
    }
  }

  static deleteData(deleteValue){
    let listData = Model.readData();
    for(let i=0;i<listData.length;i++){
      if(listData[i].id == deleteValue){
        let deletedData = listData[i].activity;
        listData.splice(i,1)
        Model.writeData(JSON.stringify(listData));
        return deletedData;
      }
    }
  }

  static complete(idActivity){
    let listData = Model.readData();
    for(let i=0;i<listData.length;i++){
      if(listData[i].id == idActivity){
        listData[i].status = 'x';
        Model.writeData(JSON.stringify(listData));
      }
    }
  }

  static uncomplete(idActivity){
    let listData = Model.readData();
    for(let i=0;i<listData.length;i++){
      if(listData[i].id == idActivity){
        listData[i].status = ' ';
        Model.writeData(JSON.stringify(listData));
      }
    }
  }
}

module.exports = Model;
