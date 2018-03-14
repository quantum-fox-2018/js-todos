const ControllTodo = require('./controller.js')


const syntax = process.argv[2]
const value = process.argv.slice(3)

// console.log(value);

ControllTodo.checkSyntax(syntax, value)
