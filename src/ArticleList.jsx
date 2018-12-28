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
        {this.props.articles.edges.map(edge => 
          <li key={edge.node.id}><ArticleListItem article={edge.node} /></li>
        )}
      </ul>
    )
  }
}

export default createFragmentContainer(
  ArticleList,
  graphql`
    fragment ArticleList_articles on Query {
      articles {
        edges {
          node {
            id
            ...ArticleListItem_article
          }
        }
      }
    }
  `
);