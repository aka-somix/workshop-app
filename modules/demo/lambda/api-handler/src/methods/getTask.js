const tasks = require('../data/tasks.json').tasks

exports.getTask = function (args) {
  // Data validation
  if (!args) {
    throw Error("Validation Error, arguments are needed for getTask method");
  }

  // Query data
  const tasksFound = tasks.filter( (t) => t.id === parseInt(args.id));
  if (tasksFound.length > 1) {
    throw Error(`Error. Found ${tasksFound.length} users with username ${tasksFound.id}. Expected 1`)
  }

  return tasksFound.length > 0 ? tasksFound[0] : null;
}
