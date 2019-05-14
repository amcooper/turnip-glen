import React from "react";
import { createFragmentContainer } from "react-relay";
import Link from "found/lib/Link";
import "./styles.css";

class ArticlePromoListItem extends React.Component {
  render() {
    const { image_url, publication_time, headline, subhed, authors, excerpt } = this.props.article;
    return (
      <Link 
        to={`/articles/${window.atob(this.props.id).replace(/^Article\:/, "")}`} 
        activeClassName="active"
      >
        <div className="ArticlePromoListItem-container">
          <div className="PromoImage-container"><img src={image_url} /></div>
          <p>{(new Date(parseInt(publication_time, 10))).toDateString()}</p>
          <h2 className="Headline">{headline}</h2>
          <h3>{subhed}</h3>
          <p>by {authors.edges.map(edge => edge.node.name).join(" and ")}</p>
          <h4>{excerpt}</h4>
        </div>
      </Link>
    );
  }
}

export default createFragmentContainer(
  ArticlePromoListItem,
  graphql`
  fragment ArticlePromoListItem_article on Article {
    image_url
    publication_time
    headline
    subhed
    excerpt
    authors {
      edges {
        node {
          name
        }
      }
    }
    tags {
      edges {
        node {
          id
          tag_name
          tag_description
        }
      }
    }
  }
  `
);
