var fs = require('fs')
var data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
var input1 = process.argv[2]
var input2 = process.argv[3];

class dataListing {
  static parseData() {
    for (var i = 0; i < data.length ; i++) {
      console.log(i+1 + '. ' +data[i].task);
    }
  }

  static addData() {
    var object = {};
    object.task = input2
    fs.readFile('data.json', function (err, data) {
    var json = JSON.parse(data);
    json.push(object);
    fs.writeFile("data.json", JSON.stringify(json), function(err){
      if (err) throw err;
      console.log(`Added "${input2}" to your TODO list...`);
       });
    })
  }

  static findId() {
    for (var j = 0; j < data.length; j++) {
      if (j + 1 == input2) {
        console.log(j+1 + '. ' + data[j].task);
      }
    }
  }

  static deletingFile() {
    for (var k = 0; k < data.length; k++) {
      if (k + 1 == input2) {
        var string = data[k].task;
        data.slice(k);
        console.log(`Deleted ${string} from your TODO list...`)
      }
    }
  }
}

// console.log(data)

module.exports = dataListing;
