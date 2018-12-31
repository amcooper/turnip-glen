import React from "react";
import ReactDOM from "react-dom";
import { QueryRenderer } from "react-relay";
import environment from "../environment";
import App from "./App.jsx";

ReactDOM.render(
  <QueryRenderer 
    environment={environment}
    query={graphql`
      query srcQuery {
        ...App_articles
    `}
    variables={{}}
    render={({error, props}) => {
      if (error) {
        console.error(error);
        return <div>Error!</div>;
      }
      if (!props) {
        return <div>Loading...</div>;
      }
      return (
        <App articles={props.articles} />
      )
    }}
  />,  
  document.getElementById("root")
);