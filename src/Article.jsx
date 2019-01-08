import React from "react";
import { createFragmentContainer } from "react-relay";

class Article extends React.Component {
  render() {
    return (
      <div className="Article">
        <div className="ArticleImageContainer">
          <img src={this.props.article.image_url} />
        </div>
        <h2>{this.props.article.headline}</h2>
        <h3>{this.props.article.subhed}</h3>
        <p>by {this.props.article.authors.edges.map(edge => edge.node.name).join(" and ")}</p>
        <p>{(new Date(parseInt(this.props.article.publication_time, 10))).toDateString()}</p>
        <p>{this.props.article.body}</p>
      </div>
    );
  }
}

export default createFragmentContainer(
  Article,
  graphql`
    fragment Article_article on Article {
      id
      image_url
      headline
      subhed
      publication_time
      body
      authors {
        edges {
          node {
            name
            email
          }
        }
      }
    }
  `
);
