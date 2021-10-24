const tasks = require('../data/tasks.json').tasks

exports.addTask = function (args) {
  // Data validation
  if (!args) {
    throw Error("Validation Error, arguments are needed for addUser method");
  }

  if (!checkExpirationDate(args.task.expiration)) {
    throw Error("Validation Error, expiration date is not valid.")
  }

  // Add data
  const newTask = {
    id: generateId(args.task.expiration),
    name: args.task.name,
    partecipants: [],
    expiration: args.task.expiration,
    status: 'AVAILABLE'
  }

  tasks.push(newTask);

  return newTask;
}

function generateId(arg) {
  return new Date().getUTCMilliseconds() + arg ;
}

/*
 * Checks if the data passed as expiration is 
 * a valid date. 
 */
function checkExpirationDate(expDate) {
  // Dates are expressed as 
  const now = Math.floor(Date.now() / 1000)
  return expDate > now;
}
