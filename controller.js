const view = require("./view.js");
const Model = require("./model.js");
let models = new Model();

class Controller{
  static cekCommands(param_command){
    let command = models.commandCheck(param_command);
    view.show(command);
  }
}

module.exports = Controller;
