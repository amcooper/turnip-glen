import React from "react";
import { QueryRenderer } from "react-relay";
import environment from "../environment.js";

export default class Article extends React.Component {
  render() {
    // debugger;
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ArticleQuery($articleId: ID!) {
            article(id: $articleId) {
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
        variables={{
          articleId: this.props.id
        }}
        render={({error, props}) => {
          if (error) {
            return <div className="QueryRendererError">{error.message}</div>
          } else if (props) {
            console.log(props);
            return (
              <div className="Article">
                <div className="ArticleImageContainer">
                  <img src={props.article.image_url} />
                </div>
                <h2>{props.article.headline}</h2>
                <h3>{props.article.subhed}</h3>
                <p>by {props.article.authors.edges.map(edge => edge.node.name).join(" and ")}</p>
                <p>{(new Date(parseInt(props.article.publication_time, 10))).toDateString()}</p>
                <p>{props.article.body}</p>
              </div>
            );
          }
          return <div>Loading...</div>
        }}
      />
    );
  }
}