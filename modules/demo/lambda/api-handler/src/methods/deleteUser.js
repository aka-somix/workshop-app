const users = require('../data/users.json').users

exports.deleteUser = function (args) {
  // Data validation
  if (!args) {
    throw Error("Validation Error, arguments are needed for getUser method");
  }

  // Query for data
  indexToDelete = users
    .map((u) => u.username)
    .indexOf(args.username);

  if(indexToDelete < 0) return false;

  // Persist mutation
  users.splice(indexToDelete,1);

  return true;
}
