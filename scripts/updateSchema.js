const utils = require('graphql/utilities');
const request = require('sync-request');
const fs = require('fs');
const path = require('path');
const GRAPHQL_ORIGIN = require('./constants.js');

const introspectionQuery = utils.getIntrospectionQuery();
const buildClientSchema = utils.buildClientSchema;
const printSchema = utils.printSchema;

const response = request('POST', `${GRAPHQL_ORIGIN}/graphql`, {
  headers: {
    'content-type': 'application/graphql',
  },
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