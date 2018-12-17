import React from "react";
import ReactDOM from "react-dom";
import Article from "./Article.jsx";

class ArticleList extends React.Component {
  render() {
    return (
      <ul>
        <Article />
      </ul>
    )
  }
}

export default ArticleList;