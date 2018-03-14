const View = require('./view.js');
const Model = require('./model.js');

class Controller{
  static viewHelp(){
    View.displayHelp()
  }

  static getLis(){
    let read = Model.bacaData(); //tarik data dari model
    View.displayLis(read) // lempar data ke view
  }

}

module.exports = Controller
