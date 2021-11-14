
// Amplify Configuration
const AWS_REGION = process.env['VUE_APP_AWS_REGION'];
export const AWS_CONFIG = {
  Auth: {
    region: AWS_REGION,
  },
  aws_appsync_graphqlEndpoint: process.env['VUE_APP_AWS_GRAPHQL_ENDPOINT'],
  aws_appsync_region: AWS_REGION,
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: process.env['VUE_APP_AWS_GRAPHQL_APIKEY'],
}
