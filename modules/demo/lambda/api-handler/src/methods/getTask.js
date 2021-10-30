const DocumentClient = require('aws-sdk/clients/dynamodb').DocumentClient;

const dbClient = new DocumentClient();

exports.getTask = async function (args) {
  // Data validation
  if (!args) {
    throw Error("Validation Error, arguments are needed for getTask method");
  }

  try {
    const response = await dbClient
      .get({
        TableName: process.env.DYNAMO_TABLE,
        Key: {
          EntityRef: 'TASK',
          EntityID: args.id,
        },
      })
      .promise();
    
    const itemFound = response.Item;
    console.log(itemFound);

    return {
      id: itemFound.EntityID,
      name: itemFound.name,
      expiration: itemFound.expiration || null,
      partecipants: itemFound.partecipants,
      status: itemFound.status
    };
    
  } catch(error) {
    console.error('DynamoDB Error:', error)
    throw Error('Internal Error while trying to access to the Database')
  }
}
