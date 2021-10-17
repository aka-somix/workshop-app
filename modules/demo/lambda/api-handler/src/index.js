const { getAllUsers } = require("./methods/getAllUsers");
const { getUser } = require("./methods/getUser");
const { addUser } = require("./methods/addUser");

exports.handler = async function (event) {
  console.log("EVENT", event);

  switch (event.field) {
    case 'getAllUsers':
      return getAllUsers()
    case 'getUser':
      return getUser(event.arguments)
    case 'addUser':
      return addUser(event.arguments)
  }
}
