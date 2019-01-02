import React from "react";
import { QueryRenderer } from "react-relay";
import environment from "../environment.js";

export default class Article extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ArticleQuery() {
            article() {
              image_url
              headline
              subhed
              publication_time
              body
              authors {
                edges {
                  node {
                    name
                    email
                  }
                }
              }
            }
          }
        `}
      />
    );
  }
}