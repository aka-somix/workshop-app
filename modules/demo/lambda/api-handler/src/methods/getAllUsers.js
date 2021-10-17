const users = require('../data/users.json').users

exports.getAllUsers = function () {
  return users;
}
