class ToDoView {
  static help() {
    console.log("help");
    console.log("list");
    console.log("add <task_content>");
    console.log("findById <task_id>");
    console.log("delete <task_id>");
    console.log("complete <task_id>");
    console.log("uncomplete <task_id>");
    console.log("tag <task_id> <tag_1> <tag_2> <tag_n>");
    console.log("filter:<tag>");
  }

  static list(data) {
    let todo;
    let status;
    for(let i in data) {
      if(data[i].status) {
        status = "[x]";
      } else {
        status = "[ ]";
      }
      todo = `${data[i].id}. ${status} ${data[i].task} ${data[i].tag}`;
      console.log(todo);
    }
  }

  static addTag(arr) {
    console.log(`Tagged task "${arr[0]}" with tags: ${arr[1].join(" ")}`);
  }

  static findById(dataById) {
    let status;
    if(dataById.status) {
      status = "[x]";
    } else {
      status = "[ ]";
    }
    console.log(`${dataById.id}. ${status} ${dataById.task}`);
  }

  static add(todo) {
    console.log(`Added "${todo}" to your TODO list...`);
  }

  static delete(todo) {
    console.log(`Deleted "${todo}" from your TODO list...`);
  }

  static updateStatus(todo, status) {
    console.log(`Changed "${todo}" status to ${status}`);
  }

  static error() {
    console.log("Invalid");
  }
}

module.exports = {
  ToDoView
}
