const view = require('./view.js')
const dataJson = require('./model.js')

class controller {
  static noInput() {
    view.noWords()
  }

  static LogHelp() {
    view.Inputhelp()
  }

  static logList() {
    dataJson.parseData();
  }

  static add() {
    dataJson.addData()
  }

  static foundId() {
    dataJson.findId()
  }

  static delete() {
    dataJson.deletingFile();
  }
}

module.exports = controller;
