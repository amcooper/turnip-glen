import React from "react";
import { graphql, createFragmentContainer } from "react-relay";
import ArticlePromoListItem from "../ArticlePromoListItem/index.jsx";
import "./styles.css";

class ArticlePromoList extends React.Component {
  render() {
    return (
      <ul className="ArticlePromoList">
        {this.props.articles.edges.map((edge) => {
          return (
            <li className="ArticlePromoListItem" key={edge.node.id}>
              <ArticlePromoListItem id={edge.node.id} article={edge.node} />
            </li>
          );
        })}
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

