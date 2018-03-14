var View = require(`./view.js`)
var Model = require('./model.js')

class Controller {
  static showHelp() {
    return View.showHelp();
  }

  static showList() {
    var data = Model.showList();
    View.showList(data);
  }
}

module.exports = Controller
