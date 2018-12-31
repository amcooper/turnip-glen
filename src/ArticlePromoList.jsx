import React from "react";
import { graphql, QueryRenderer, createFragmentContainer } from "react-relay";
import environment from "../environment.js";
import ArticlePromoListItem from "./ArticlePromoListItem.jsx";
import "./ArticlePromoList.css";

class ArticlePromoList extends React.Component {
  render() {
    return (
/*      <h3>Relay is eazay.</h3> */
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ArticlePromoListQuery {
            articles {
              edges {
                node {
                  id
                  ...ArticlePromoListItem_article
                }
              }
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return (
              <ul className="ArticlePromoList">
                {props.articles.edges.map(edge => 
                  <li key={edge.node.id}><ArticlePromoListItem article={edge.node} /></li>
                )}
              </ul>
            );
          } 
          return <div>Loading...</div>;
        }}
      />
    );
  }
}

export default ArticlePromoList;
/*
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
*/