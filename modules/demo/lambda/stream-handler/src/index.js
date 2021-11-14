const DocumentClient = require('aws-sdk/clients/dynamodb').DocumentClient;

const dbclient = new DocumentClient();

exports.handler = async function (event) {
  console.log(JSON.stringify(event))
  for (const record of event.Records) {
    await handleRecord(record);
  }
}

async function handleRecord(record) {
  if (record.eventName !== "REMOVE") {
    console.log(`EVENT ${record.eventName} NOT HANDLED`);
    return;
  }

  // Retrieve dynamo old image (item deleted)
  const dynamoImage = record.dynamodb.OldImage;

  // Filter unmanaged cases
  const tableReference = dynamoImage.EntityRef.S;
  if (tableReference !== "TASK") {
    console.log("EVENT MANAGED ONLY FOR TASK TABLE");
    return;
  }

  if (dynamoImage.status.S !== "AVAILABLE") {
    console.log("EVENT MANAGED ONLY FOR AVAILABLE TASKS");
    return;
  }

  // Filter out preliminary deletion
  const now = Math.floor(Date.now() / 1000);
  if (dynamoImage.expiration.N >= now) {
    console.log("ITEM REMOVED BEFORE EXPIRATION");
    return;
  }

  await dbclient
    .put({
      TableName: process.env.DYNAMO_TABLE,
      Item: {
        EntityRef: "TASK",
        EntityID: dynamoImage.EntityID.S,
        name: dynamoImage.name.S,
        partecipants: dynamoImage.partecipants
          ? dynamoImage.partecipants.L
          : [],
        status: "EXPIRED",
        expiration: dynamoImage.expiration.N,
      },
    })
    .promise();
}
