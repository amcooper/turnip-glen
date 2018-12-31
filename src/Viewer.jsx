import React from "react";
import ReactDOM from "react-dom";
import { QueryRenderer } from "react-relay";
import environment from "../environment";
import ArticlePromoList from "./ArticlePromoList.jsx";

ReactDOM.render(
  <QueryRenderer 
    environment={environment}
    query={graphql`
      query ViewerQuery {
        articles {
          edges {
            node {
              id
              headline
              subhed
              excerpt
              image_url
              publication_time
              authors {
                edges {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
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