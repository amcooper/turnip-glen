import {
  Environment,
  Network,
  RecordSource,
  Store,
} from "relay-runtime";

const GRAPHQL_ORIGIN = "http://127.0.0.1:3099"; // oy vey

function fetchQuery(
  operation,
  variables
) {
  return fetch(`${GRAPHQL_ORIGIN}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    }),
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

export default environment;