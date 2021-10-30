const DocumentClient = require('aws-sdk/clients/dynamodb').DocumentClient;

const dbClient = new DocumentClient();

exports.addUser = async function (args) {
  // Data validation
  if (!args) {
    throw Error("Validation Error, arguments are needed for addUser method");
  }

  // Add data
  const newUser = {
    username: buildUsername(args.user.name, args.user.surname),
    name: args.user.name,
    surname: args.user.surname,
    university: args.user.university
  }

  try {
    await dbClient
      .put({
        TableName: process.env.DYNAMO_TABLE,
        Item: {
          EntityRef: 'USER',
          EntityID: newUser.username,
          name: newUser.name,
          surname: newUser.surname,
          university: newUser.university
        },
      })
      .promise();

    return newUser;
  } catch(error) {
    console.error('DynamoDB Error:', error)
    throw Error('Internal Error while trying to access to the Database')
  }

}

function buildUsername(name, surname) {
  return `${name.trim().toLowerCase()[0]}.${surname.trim().toLowerCase()}`
}