import React from "react";
import ReactDOM from "react-dom";
import { QueryRenderer } from "react-relay";
import environment from "../environment";
import ArticlePromoList from "./ArticlePromoList.jsx";
import Article from "./Article.jsx";
import "./Viewer.css";

export default class Viewer extends React.Component {
  render() {
    /*
    let component;
    switch (this.props.view) {
      case "Article":
        component = <Article id={this.props.articleId} />;
        break;
      case "Page":
        component = <Page id={this.props.pageId} />;
        break;
      default:
        component = <ArticlePromoList />
    }
    */
    return (
      <div className="Viewer-container">
        {/*component*/}
      </div>
    );
  }
}