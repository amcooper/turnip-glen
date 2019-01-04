import React from "react";
import { graphql, QueryRenderer, createFragmentContainer } from "react-relay";
import environment from "../environment.js";
import ArticlePromoListItem from "./ArticlePromoListItem.jsx";
import "./ArticlePromoList.css";

class ArticlePromoList extends React.Component {
  render() {
    console.log("****", this.props);
    return (
      <ul className="ArticlePromoList">
        {this.props.articles.edges.map(edge => 
          <li key={edge.node.id}><ArticlePromoListItem article={edge.node} /></li>
        )}
      </ul>
    );
  }
}

export default createFragmentContainer(
  ArticlePromoList,
  graphql`
    fragment ArticlePromoList_articles on ArticleConnection {

        edges {
          node {
            id
            ...ArticlePromoListItem_article
          }
        }
      
    }
  `
);

