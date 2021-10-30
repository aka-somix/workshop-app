const DocumentClient = require('aws-sdk/clients/dynamodb').DocumentClient;

const dbClient = new DocumentClient();

exports.deleteUser = async function (args) {
  // Data validation
  if (!args) {
    throw Error("Validation Error, arguments are needed for deleteUser method");
  }

  try {
    await dbClient
      .delete({
        TableName: process.env.DYNAMO_TABLE,
        Key: {
          EntityRef: 'USER',
          EntityID: args.username,
        },
      })
      .promise();

    return true;

  } catch(error) {
    console.error('DynamoDB Error:', error)
    return false;
  }
}
