const users = require('../data/users.json').users

exports.addUser = function (args) {
  // Data validation
  if (!args) {
    throw Error("Validation Error, arguments are needed for addUser method");
  }

  // Add data
  const newUser = {
    username: buildUsername(args.user.name, args.user.surname),
    name: args.user.name,
    surname: args.user.surname,
    university: args.user.university
  }

  users.push(newUser);

  return newUser;
}

function buildUsername(name, surname) {
  return `${name.trim().toLowerCase()[0]}.${surname.trim().toLowerCase()}`
}