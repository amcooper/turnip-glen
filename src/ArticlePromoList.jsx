import React from "react";
import { graphql, createFragmentContainer } from "react-relay";
import ArticlePromoListItem from "./ArticlePromoListItem.jsx";
import "./ArticlePromoList.css";

class ArticlePromoList extends React.Component {
  render() {
    return (
      <ul className="ArticlePromoList">
        {this.props.articles.edges.map(edge => 
          <li key={edge.node.id}><ArticlePromoListItem article={edge.node} /></li>
        )}
      </ul>
    )
  }
}

export default createFragmentContainer(
  ArticlePromoList,
  graphql`
    fragment ArticlePromoList_articles on Query {
      articles {
        edges {
          node {
            id
            ...ArticlePromoListItem_article
          }
        }
      }
    }
  `
);