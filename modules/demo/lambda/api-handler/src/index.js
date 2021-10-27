const { getAllUsers } = require("./methods/getAllUsers");
const { getUser } = require("./methods/getUser");
const { addUser } = require("./methods/addUser");
const { deleteUser } = require("./methods/deleteUser");
const { getAllTasks } = require("./methods/getAllTasks");
const { getTask } = require("./methods/getTask");
const { addTask } = require("./methods/addTask");
const { deleteTask } = require("./methods/deleteTask");

exports.handler = async function (event) {
  console.log("EVENT", event);

  switch (event.field) {
    // User methods
    case 'getAllUsers':
      return getAllUsers()
    case 'getUser':
      return getUser(event.arguments)
    case 'addUser':
      return addUser(event.arguments)
    case 'deleteUser':
      return deleteUser(event.arguments)
      
    // Tasks methods
    case 'getAllTasks':
      return getAllTasks()
    case 'getTask':
      return getTask(event.arguments)
    case 'addTask':
      return addTask(event.arguments)
    case 'deleteTask':
      return deleteTask(event.arguments)
    default:
      throw Error('Error. Unrecognized method');
  }
}
