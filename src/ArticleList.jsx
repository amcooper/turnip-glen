import React from "react";
import ReactDOM from "react-dom";
import { graphql, QueryRenderer } from "react-relay";
import environment from "../environment.js";
import Article from "./Article.jsx";


class ArticleList extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ArticleListQuery {
            feed {
              headline
              subhed
              excerpt
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
            <ul>
              {props.feed.map(article => 
                <Article article={article} />
              )}
            </ul>
          )
        }}
      />
    )
  }
}

export default ArticleList;