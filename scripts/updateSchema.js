const utils = require('graphql/utilities');
const request = require('sync-request');
const fs = require('fs');
const path = require('path');

const introspectionQuery = utils.introspectionQuery;
const buildClientSchema = utils.buildClientSchema;
const printSchema = utils.printSchema;

const GRAPHQL_ORIGIN = process.env.GRAPHQL_ORIGIN || 'http://localhost:3099';
debugger;
const response = request('POST', `${GRAPHQL_ORIGIN}/graphql`, {
  headers: {
    'content-type': 'application/graphql',
  },
  // body: introspectionQuery,
  qs: {
    query: introspectionQuery,
    operationName: "IntrospectionQuery"
  }
}).getBody();

fs.writeFileSync(
  path.join(__dirname, '../schema.json'),
  response
);

fs.writeFileSync(
  path.join(__dirname, '../schema.graphql'),
  printSchema(buildClientSchema(JSON.parse(response).data))
);