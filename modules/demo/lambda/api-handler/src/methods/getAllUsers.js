const DocumentClient = require('aws-sdk/clients/dynamodb').DocumentClient;

const dbClient = new DocumentClient();

exports.getAllUsers = async function () {
  try {
    const response = await dbClient
      .query({
        TableName: process.env.DYNAMO_TABLE,
        KeyConditionExpression: '#EntityRef = :users',
        ExpressionAttributeNames: {'#EntityRef': 'EntityRef'},
        ExpressionAttributeValues: {':users': 'USER'}
      })
      .promise();
    
    const itemsFound = response.Items;

    return itemsFound.map((item) => {
      return {
        username: item.EntityID,
        name: item.name,
        surname: item.surname,
        university: item.university || null
      }
    })
    
  } catch(error) {
    console.error('DynamoDB Error:', error)
    throw Error('Internal Error while trying to access to the Database')
  }
}
