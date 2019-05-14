import React from "react";
import { graphql, createFragmentContainer } from "react-relay";
import ArticlePromoListItem from "../ArticlePromoListItem/index.jsx";
import "./styles.css";

class ArticlePromoList extends React.Component {
  render() {
    const targetTag = "privacy"; 
    return (
      <ul className="ArticlePromoList">
        {this.props.articles.edges
          .filter(( articleEdge ) => 
            articleEdge.node.tags.edges.map((tagEdge) => tagEdge.node.tag_name).includes(targetTag)  
          )
          .map((edge) => {
          console.log("tags: ", edge.node.tags.edges.map((tag_edge) => tag_edge.node.id).join(" "));
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
          tags {
            edges {
              node {
                id
                tag_name
              }
            }
          }
          ...ArticlePromoListItem_article
        }
      }      
    }
  `
);

