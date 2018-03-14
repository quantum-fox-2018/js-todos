const fs = require("fs")

class Todo {
  constructor(id, description, createdDate){
    this.id = id
    this.description = description
    this.isComplete = false
    this.createdDate = createdDate
    this.completedDate = "not yet completed"
    this.tag = []
  }
}

class Model {
  static filter(tag){
    let jsonArr = Model.readList()
    let filteredTagArr = []
    for (var i = 0; i < jsonArr.length; i++) {
      for (var j = 0; j < jsonArr[i].tag.length; j++) {
        if (tag === jsonArr[i].tag[j]) {
          filteredTagArr.push(jsonArr[i])
        }
      }
    }

    if (filteredTagArr.length === 0) {
      return "tag not found"
    }else{
      let str = []
      for (var i = 0; i < filteredTagArr.length; i++) {
        str.push(Model.formingString(filteredTagArr[i].id, filteredTagArr[i].isComplete, filteredTagArr[i].description, filteredTagArr[i].createdDate, filteredTagArr[i].completedDate, filteredTagArr[i].tag))
      }
      return str.join("\n")
    }
  }

  static addTags(index, tags){
    let jsonArr = Model.readList()
    let jsonIndex = -1
    for (var i = 0; i < jsonArr.length; i++) {
      if (jsonArr[i].id.toString() === index) {
        jsonIndex = i
      }
    }

    if (jsonIndex === -1) {
      return "todo with this ID is not found"
    }

    for (var i = 0; i < tags.length; i++) {
      jsonArr[jsonIndex].tag.push(tags[i])
    }
    Model.writeData(JSON.stringify(jsonArr))

    let info = `succesfully add tag into task ID ${index}`
    return info
  }

  static addTodo(todo){
    let id = 1
    let jsonArr = Model.readList()
    if (jsonArr.length > 0) {
      id = parseInt(jsonArr[jsonArr.length-1].id) + 1
    }
    let objTodo = new Todo(id, todo, new Date())
    jsonArr.push(objTodo)
    Model.writeData(JSON.stringify(jsonArr))
    let info = `Added "${todo}" to your TODO list`
    return info
  }

  static deleteTodo(index){
    let jsonArr = Model.readList()
    let temp = ""
    let status = false
    for (var i = 0; i < jsonArr.length; i++) {
      if (jsonArr[i].id.toString() === index.toString()) {
        temp = jsonArr[i].description
        jsonArr.splice(i, 1)
        status = true
        Model.writeData(JSON.stringify(jsonArr))
        i = jsonArr.length
      }
    }

    if (status === true) {
      let info = `Deleted "${temp}" from your TODO list`
      return info
    }else{
      return "todo with this ID is not found"
    }

  }

  static findById(index){
    let jsonArr = Model.readList()
    for (var i = 0; i < jsonArr.length; i++) {
      if (jsonArr[i].id.toString() === index.toString()) {
        return Model.formingString(jsonArr[i].id, jsonArr[i].isComplete, jsonArr[i].description, jsonArr[i].createdDate, jsonArr[i].completedDate, jsonArr[i].tag)
        i = jsonArr.length
      }
    }
    return "todo with this ID is not found"
  }

  static formingString(id, status, description, createdDate, completedDate, tag){
    if (status === true) {
      status = "x"
    }else{
      status = " "
    }
    tag = tag.join(" ")
    return `${id}. [${status}] ${description} created: ${createdDate} completed: ${completedDate} tag ${tag} `
  }

  static displayTodo(ord){
    let order = "asc"
    if (ord) {
      order = ord
    }
    let jsonArr = Model.readList()
    let str = []

    if (order === "asc") {
      for (let i = 0; i < jsonArr.length; i++) {
        str.push(Model.formingString(jsonArr[i].id, jsonArr[i].isComplete, jsonArr[i].description, jsonArr[i].createdDate, jsonArr[i].completedDate, jsonArr[i].tag ))
      }
    }else{
      for (let i = jsonArr.length-1; i >= 0; i--) {
        str.push(Model.formingString(jsonArr[i].id, jsonArr[i].isComplete, jsonArr[i].description, jsonArr[i].createdDate, jsonArr[i].completedDate, jsonArr[i].tag))
      }
    }
    return str.join("\n")
  }

  static checkCompleteStatus(checked, index){
    let jsonArr = Model.readList()
    let completedDate = null
    if(checked === "check"){
      checked = true
      completedDate = new Date()
    }else{
      checked = false
    }

    let status = false
    for (var i = 0; i < jsonArr.length; i++) {
      if (jsonArr[i].id.toString() === index.toString()) {
        jsonArr[i].isComplete = checked
        jsonArr[i].completedDate = completedDate
        status = true
        Model.writeData(JSON.stringify(jsonArr))
        i = jsonArr.length
      }
    }
    if (status === false) {
      return "todo with this ID is not found"
    }else{
      return
    }
  }

  static displayCompletedTodo(ord){
    let order = "asc"
    if (ord) {
      order = ord
    }
    let jsonArr = Model.readList()
    let filteredJsonArr = jsonArr.filter(a => a.isComplete === true)
    let str = []
    filteredJsonArr.sort(function(a, b){
      return new Date(a.completedDate) - new Date(b.completedDate)
    })
    console.log(filteredJsonArr);
    if (ord === "asc") {
      filteredJsonArr.reverse()
    }
    for (let i = 0; i < filteredJsonArr.length; i++) {
      str.push(Model.formingString(filteredJsonArr[i].id, filteredJsonArr[i].isComplete, filteredJsonArr[i].description, filteredJsonArr[i].createdDate, filteredJsonArr[i].completedDate, filteredJsonArr[i].tag))
    }

    return str.join("\n")
  }

  static readList(){
    let jsonString = Model.readData()
    let jsonArr = JSON.parse(jsonString)
    return jsonArr
  }

  static writeData(str){
    fs.writeFileSync("data.json", str, "utf8")
  }

  static readData(){
    let str = fs.readFileSync('./data.json', 'utf8');
    return str;
  }
}
module.exports = Model
