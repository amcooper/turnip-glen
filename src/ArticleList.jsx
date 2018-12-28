import React from "react";
import ReactDOM from "react-dom";
import { graphql, QueryRenderer, createFragmentContainer } from "react-relay";
import environment from "../environment.js";
import ArticleListItem from "./ArticleListItem.jsx";
import "./ArticleList.css";


class ArticleList extends React.Component {
  render() {
    return (
      <ul className="ArticleList">
        {props.articles.edges.map(article => 
          <li key={article.node.id}><ArticleListItem article={article.node} /></li>
        )}
      </ul>
    )
  }
}

export default createFragmentContainer(
  ArticleList,
  graphql`
    fragment ArticleList_articles on ArticleConnection {
      edges {
        node {
          ...ArticleListItem_article
        }
      }
    }
  `
);