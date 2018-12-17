import React from "react";
import ReactDOM from "react-dom";

class Article extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.article.headline}</h2>
        <h3>{this.props.article.subhed}</h3>
        <h4>{this.props.article.excerpt}</h4>
      </div>
    )
  }
}

export default Article;