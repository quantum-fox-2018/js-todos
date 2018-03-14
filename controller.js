const {ToDoView} = require('./view.js');
const {ToDoModel} = require('./model.js');

class ToDoController {
  constructor(objToDo) {
    this._menu = objToDo.menu;
    this._input = objToDo.input;
    this._additional = objToDo.additional;
  }

  get menu() {
    return this._menu;
  }

  get input() {
    return this._input;
  }

  get additional() {
    return this._additional;
  }

  do() {
    if(!this.menu || this.menu === "help") {
      ToDoView.help();
    } else if(this.menu === "list") {
      ToDoView.list(ToDoModel.readData());
    } else if(this.menu === "list:created") {
      let data = ToDoModel.listByDate(this.input);
      ToDoView.list(data);
    } else if(this.menu === "list:completed") {
      let data = ToDoModel.listByStatusComplete(this.input);
      ToDoView.list(data);
    } else if(this.menu === "add") {
      let addThisData = this.input;
      if(this.additional) {
        let addThisData = `${this.input} ${this.additional.join(" ")}`;
      }
      let data = ToDoModel.addData(addThisData);
      if(data) {
        ToDoView.add(data);
      }
    } else if(this.menu === "findById") {
      let data = ToDoModel.findById(this.input);
      if(data) {
        ToDoView.findById(data);
      }
    } else if(this.menu === "delete") {
      let data = ToDoModel.deleteData(this.input);
      if(data) {
        ToDoView.delete(data);
      }
    } else if(this.menu === "complete") {
      let data = ToDoModel.updateStatus(this.input, true);
      console.log(data);
      if(data) {
        ToDoView.updateStatus(data, "complete");
      }
    } else if(this.menu === "uncomplete") {
      let data = ToDoModel.updateStatus(this.input, false);
      if(data) {
        ToDoView.updateStatus(data, "uncomplete");
      }
    } else if(this.menu === "tag") {
      let data = ToDoModel.addTag(this.input, this.additional);
      if(data) {
        ToDoView.addTag(data);
      }
    } else if(this.menu.slice(0, 7) === "filter:") {
      let filterTag = this.menu.slice(7);
      let dataFilterByTag = ToDoModel.filterByTag(filterTag);
      ToDoView.list(dataFilterByTag);
    } else {
      // tampilkan tidak ada menu yang sesuai
      ToDoView.error();
    }
  }
}

module.exports = {
  ToDoController
}
