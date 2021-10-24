const tasks = require('../data/tasks.json').tasks

exports.deleteTask = function (args) {
  // Data validation
  if (!args) {
    throw Error("Validation Error, arguments are needed for getUser method");
  }

  // Query for data
  indexToDelete = tasks
    .map((t) => t.id)
    .indexOf(parseInt(args.id));

  if(indexToDelete < 0) return false;

  // Persist mutation
  tasks.splice(indexToDelete,1);

  return true;
}
