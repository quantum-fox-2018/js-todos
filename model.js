const fs = require('fs');

class Model {
  static readData() {
    let rawList = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

    return rawList;
  }

  static writeData(dataList) {
    let addedTask = JSON.stringify(dataList);
    fs.writeFileSync('data.json', addedTask, 'utf-8');
  }

  static showTask() {
    let dataList = Model.readData();
    let checklist;
    let result = [`Your TODO List: `];

    for (let i in dataList) {
      if (dataList[i].status == true) {
        checklist = '[x]';
      } else if (dataList[i].status == false) {
        checklist = '[ ]';
      }
      result.push(`${dataList[i].id}. ${checklist} ${dataList[i].task}`);
    }

    return result.join('\n');
  }

  static addTask(newTask) {
    let dataList = Model.readData();
    let newId = dataList.length + 1;
    let date = new Date();
    let objTask = {id: newId, task: newTask, status: false, created_at: date};
    let result = `Added "${objTask.task}" to your TODO list...`

    dataList.push(objTask);
    Model.writeData(dataList);

    return result;
  }

  static findById(id) {
    let dataList = Model.readData();
    let result = [`Task found...`];

    for (let i in dataList) {
      if (id == dataList[i].id) {
        result.push(`${dataList[i].id}. ${dataList[i].task}`);
      }
    }

    return result.join('\n');
  }

  static deleteTask(id) {
    let dataList = Model.readData();
    let result;

    for (let i in dataList) {
      if (id == dataList[i].id) {
        let index = i;
        result = `Deleted "${dataList[i].task}" from your TODO list`;
        dataList.splice(index, i);
        Model.writeData(dataList);
      }
    }

    return result;
  }

  static setComplete(id) {
    let dataList = Model.readData();
    let result;

    for (let i in dataList) {
      if (id == dataList[i].id) {
        dataList[i].status = true;
        Model.writeData(dataList);
      }
    }
    return Model.showTask();
  }

  static setUncomplete(id) {
    let dataList = Model.readData();
    let result;

    for (let i in dataList) {
      if (id == dataList[i].id) {
        dataList[i].status = false;
        Model.writeData(dataList);
      }
    }
    return Model.showTask();
  }
}

module.exports = Model
