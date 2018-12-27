import React from "react";
import ReactDOM from "react-dom";
import "./ArticleListItem.css";

class Article extends React.Component {
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

export default Article;