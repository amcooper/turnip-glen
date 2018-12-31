import React from "react";
import ReactDOM from "react-dom";
import { QueryRenderer, createFragmentContainer } from "react-relay";
import environment from "../environment";
import ArticleList from "./ArticleList.jsx";

class App extends React.Component {
  render() {
    return (
      <ArticleList articles={this.props.articles} />
    )
  }
}

export default createFragmentContainer(
  App,
  graphql`
    fragment App_articles on Query {
      ...ArticleList_articles
    }
  `
);