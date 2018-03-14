"use strict"

const Controller = require('./controller.js');
const argv = process.argv

if(argv[2] === undefined || argv[2] === 'help'){
  Controller.viewHelp()
}
else if(argv[2] === 'list'){
  Controller.getLis()
  // console.log('cek')
}
