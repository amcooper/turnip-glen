import React from "react";
import ReactDOM from "react-dom";
import { createFragmentContainer } from "react-relay";
import "./ArticleListItem.css";

class ArticleListItem extends React.Component {
  render() {
    const { image_url, publication_time, headline, subhed, authors, excerpt } = this.props.article;
    return (
      <div className="ArticleListItem-container">
        <div className="PromoImage-container"><img src={image_url} /></div>
        <p>{(new Date(parseInt(publication_time, 10))).toDateString()}</p>
        <h2 className="Headline">{headline}</h2>
        <h3>{subhed}</h3>
        <p>by {authors.edges.map(edge => edge.node.name).join(" and ")}</p>
        <h4>{excerpt}</h4>
      </div>
    )
  }
}

export default createFragmentContainer(
  ArticleListItem,
  graphql`
    fragment ArticleListItem_article on Article {
      image_url
      publication_time
      headline
      subhed
      authors {
        edges {
          node {
            name
          }
        }
      }
      excerpt
    }
  `
);