import React from "react";
import ReactDOM from "react-dom";
import { graphql, QueryRenderer } from "react-relay";
import environment from "../environment.js";
import ArticleListItem from "./ArticleListItem.jsx";
import "./ArticleList.css";


class ArticleList extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ArticleListQuery {
            feed {
              id
              image_url
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
            <ul className="ArticleList">
              {props.feed.map(article => 
                <li key={article.id}><ArticleListItem article={article} /></li>
              )}
            </ul>
          )
        }}
      />
    )
  }
}

export default ArticleList;