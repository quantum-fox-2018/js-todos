const fs = require('fs');
// const dataJson = require('./data.json');

class Model{
  static bacaData(){
    let dataLis = fs.readFileSync('data.json','utf8')
    let ObjLis = JSON.parse(dataLis)
    return ObjLis

  }

  
}

module.exports = Model
