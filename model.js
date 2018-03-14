const fs = require('fs');

class Model{

  static readData(){
    let listData = JSON.parse(fs.readFileSync('data.json','utf8'));
    return listData;
  }

  static addData(activity){

    let listData = Model.readData();
    let newObject = {id:(parseInt(listData[listData.length-1].id)+1).toString(),activity:activity,status:" ",date:new Date(),completeTime:new Date(),tags:[]};
    listData.push(newObject);
    Model.writeData(JSON.stringify(listData));

  }

  static addTagData(idList,tagNames){
    let listData = Model.readData();
    for(let i=0;i<listData.length;i++){
      if(listData[i].id == idList){
        for(let j=0;j<tagNames.length;j++){
          listData[i].tags.push(tagNames[j]);
        }
        Model.writeData(JSON.stringify(listData));
        return listData[i].activity;
      }
    }
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
        listData[i].completeTime = new Date();
        Model.writeData(JSON.stringify(listData));
      }
    }
  }

  static uncomplete(idActivity){
    let listData = Model.readData();
    for(let i=0;i<listData.length;i++){
      if(listData[i].id == idActivity){
        listData[i].status = ' ';
        listData[i].completeTime = listData[i].date;
        Model.writeData(JSON.stringify(listData));
      }
    }
  }

  static createdSort(sorttype){
    let listData = Model.readData();

    if(sorttype == "desc"){
      return listData.reverse();
    }
    return listData
  }

  static completedSort(sorttype){
    let listData = Model.readData();

    if(sorttype == 'asc'){
       return listData.sort(function(a, b){ var dateA = new Date(a.completeTime), dateB = new Date(b.completeTime);
    return +dateB - +dateA;})
    }
    else if(sorttype == 'desc'){
      return listData.sort(function(a, b){ var dateA = new Date(a.completeTime), dateB = new Date(b.completeTime);
   return +dateA - +dateB;})
    }
  }

  static filterData(category){
    let listData = Model.readData();
    let dataWithSameCategory = [];
    let dataWithDifferentCategory = [];

    for(let i=0;i<listData.length;i++){

      for(let j=0;j<listData[i].tags.length;j++){
        if(listData[i].tags[j] == category){
          dataWithSameCategory.push(listData[i]);
        }
        else if(listData[i].tags[j] != category){
          dataWithDifferentCategory.push(listData[i]);
        }
      }

    }

    let filteredData = [];

    for(let i=0;i<dataWithSameCategory.length;i++){
      filteredData.push(dataWithSameCategory[i]);
    }
    for(let i=0;i<dataWithDifferentCategory.length;i++){
      filteredData.push(dataWithDifferentCategory[i])
    }

    return filteredData
  }
}

module.exports = Model;
