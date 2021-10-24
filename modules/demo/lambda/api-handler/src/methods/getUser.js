const DocumentClient = require('aws-sdk/clients/dynamodb').DocumentClient;

const dbClient = new DocumentClient();

exports.getUser = async function (args) {
  // Data validation
  if (!args) {
    throw Error("Validation Error, arguments are needed for getUser method");
  }

  try {
    const response = await dbClient
      .get({
        TableName: process.env.DYNAMO_TABLE,
        Key: {
          EntityRef: 'USER',
          EntityID: args.username,
        },
      })
      .promise();
    
    const itemFound = response.Item;
    console.log(itemFound);

    return {
      username: itemFound.EntityID,
      name: itemFound.name,
      surname: itemFound.surname,
      university: itemFound.university || null
    };
    
  } catch(error) {
    console.error('DynamoDB Error:', error)
    throw Error('Internal Error while trying to access to the Database')
  }
}
