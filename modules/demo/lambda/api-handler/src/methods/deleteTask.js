const DocumentClient = require('aws-sdk/clients/dynamodb').DocumentClient;

const dbClient = new DocumentClient();

exports.deleteTask = async function (args) {
  // Data validation
  if (!args) {
    throw Error("Validation Error, arguments are needed for deleteTask method");
  }

  try {
    await dbClient
      .delete({
        TableName: process.env.DYNAMO_TABLE,
        Key: {
          EntityRef: 'TASK',
          EntityID: args.id,
        },
      })
      .promise();

    return true;

  } catch(error) {
    console.error('DynamoDB Error:', error)
    return false;
  }
}
