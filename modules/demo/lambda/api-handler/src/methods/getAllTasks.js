const DocumentClient = require('aws-sdk/clients/dynamodb').DocumentClient;

const dbClient = new DocumentClient();

exports.getAllTasks = async function () {
  try {
    const response = await dbClient
      .query({
        TableName: process.env.DYNAMO_TABLE,
        KeyConditionExpression: '#EntityRef = :tasks',
        ExpressionAttributeNames: {'#EntityRef': 'EntityRef'},
        ExpressionAttributeValues: {':tasks': 'TASK'}
      })
      .promise();
    
    const itemsFound = response.Items;

    return itemsFound.map((item) => {
      return {
        id: item.EntityID,
        name: item.name,
        expiration: item.expiration || null,
        partecipants: item.partecipants,
        status: item.status
      }
    })
    
  } catch(error) {
    console.error('DynamoDB Error:', error)
    throw Error('Internal Error while trying to access to the Database')
  }
}

