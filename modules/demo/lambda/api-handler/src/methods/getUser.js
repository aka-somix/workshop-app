const users = require('../data/users.json').users

exports.getUser = function (args) {
  // Data validation
  if (!args) {
    throw Error("Validation Error, arguments are needed for getUser method");
  }

  // Query data
  const user = users.filter( (u) => u.username == args.username);
  if (user.length > 1) {
    throw Error(`Error. Found ${user.length} users with username ${args.username}. Expected 1`)
  }

  return user.length > 0 ? user[0] : null;
}
