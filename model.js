const fs = require('fs');
const dateFormat = require('dateformat');

class ToDoModel {
  static getDate() {
    var date = new Date();
    return date;
    //return dateFormat(date, "dddd, mmmm dS, yyyy, h:MM:ss TT");
  }

  static readData() {
    let dataJSON = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    return dataJSON;
  }

  static listByDate(orderBy) {
    let dataJSON = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    let dataByDate = dataJSON.sort(function(a,b){
      return new Date(b.date) - new Date(a.date);
    });
    if(orderBy == "asc") {
      dataByDate = dataByDate.reverse();
    }
    return dataByDate;
  }

  static listByStatusComplete(orderBy) {
    console.log(orderBy);
    let dataJSON = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    let dataByStatusComplete = dataJSON.filter(function(data) {
      return data.status == true;
    });
    let dataByStatusCompleteAndDate = dataByStatusComplete.sort(function(a,b){
      return new Date(b.date) - new Date(a.date);
    });
    if(orderBy == "asc") {
      dataByStatusCompleteAndDate = dataByStatusCompleteAndDate.reverse();
    }
    return dataByStatusCompleteAndDate;
  }

  static findById(id) {
    let dataJSON = ToDoModel.readData();
    for(let i in dataJSON) {
      if(dataJSON[i].id === id) {
        return dataJSON[i];
      }
    }
  }

  static addData(data) {
    let dataJSON = ToDoModel.readData();
    let id;
    if(dataJSON == false) {
      id = 1;
    } else {
      id = Math.max(...dataJSON.map(function(data){ return data.id; })) + 1;
    }

    let newObj = {  id: id,
                    task: data,
                    status: false,
                    date: ToDoModel.getDate(),
                    tag: []};
    dataJSON.push(newObj);
    fs.writeFileSync('./data.json', JSON.stringify(dataJSON));
    return data;
  }

  static filterByTag(tag) {
    let dataJSON = ToDoModel.readData();
    let dataFilterByTag = [];
    for(let i in dataJSON) {
      if(dataJSON[i].tag.indexOf(tag) !== -1) {
        dataFilterByTag.push(dataJSON[i]);
      }
    }
    return dataFilterByTag;
  }

  static addTag(id, arrTag) {
    let dataJSON = ToDoModel.readData();
    let dataAddTag = ToDoModel.findById(id);
    dataAddTag.tag.push(...arrTag);
    for(let i in dataJSON) {
      if(dataJSON[i].id == id) {
        dataJSON[i] = dataAddTag;
      }
    }
    fs.writeFileSync('./data.json', JSON.stringify(dataJSON));
    return [dataAddTag.task, arrTag];
  }

  static deleteData(id, callback) {
    let dataJSON = ToDoModel.readData();
    let deleteData = dataJSON.filter(function(data) {
      return data.id == id;
    });
    for(let i in dataJSON) {
      if(dataJSON[i].id === deleteData[0].id) {
        dataJSON.splice(i, 1);
      }
    }
    fs.writeFileSync('./data.json', JSON.stringify(dataJSON));
    return deleteData[0].task;
  }

  static findById(id, callback) {
    let dataJSON = ToDoModel.readData();
    let dataById = dataJSON.filter(function(data) {
      return data.id == id;
    });
    return dataById[0];
  }

  static updateStatus(id, newStatus) {
    let dataJSON = ToDoModel.readData();
    let task;
    for(let i in dataJSON) {
      if(dataJSON[i].id == id) {
        task = dataJSON[i].task;
        dataJSON[i].status = newStatus;
      }
    }
    fs.writeFileSync('./data.json', JSON.stringify(dataJSON));
    return task;
  }
}

module.exports = {
  ToDoModel
}
