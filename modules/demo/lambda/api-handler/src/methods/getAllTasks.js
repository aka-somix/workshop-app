const tasks = require('../data/tasks.json').tasks

exports.getAllTasks = function () {
  return tasks;
}
