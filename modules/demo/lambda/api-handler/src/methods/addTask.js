const DocumentClient = require('aws-sdk/clients/dynamodb').DocumentClient;

const dbClient = new DocumentClient();

exports.addTask = async function (args) {
  // Data validation
  if (!args) {
    throw Error("Validation Error, arguments are needed for addTask method");
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

  try {
    await dbClient
      .put({
        TableName: process.env.DYNAMO_TABLE,
        Item: {
          EntityRef: "TASK",
          EntityID: newTask.id.toString(),
          name: newTask.name,
          expiration: newTask.expiration,
          status: newTask.status,
          partecipants: newTask.partecipants,
        },
      })
      .promise();

    return newTask;
  } catch(error) {
    console.error('DynamoDB Error:', error)
    throw Error('Internal Error while trying to access to the Database')
  }
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
