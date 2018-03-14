var fs = require('fs');
var Controller = require('./controller.js')

class Model {
  static showList() {
    var listJSON = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
    return listJSON
  }
}

module.exports = Model
