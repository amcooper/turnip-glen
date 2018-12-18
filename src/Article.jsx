import React from "react";
import ReactDOM from "react-dom";
import "./ArticleListItem.css";

class Article extends React.Component {
  render() {
    return (
      <div className="ArticleListItem-container">
        <div className="PromoImage-container"><img src={this.props.article.image_url} /></div>
        <h2 className="Headline">{this.props.article.headline}</h2>
        <h3>{this.props.article.subhed}</h3>
        <h4>{this.props.article.excerpt}</h4>
      </div>
    )
  }
}

export default Article;