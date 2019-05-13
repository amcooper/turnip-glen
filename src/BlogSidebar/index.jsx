import React from "react";
import TagList from "../TagList/index.jsx";
import ErrorBoundary from "../ErrorBoundary/index.jsx";
import environment from  "../../environment";
import "./styles.css";

export default class BlogSidebar extends React.Component {
  render() {
    return (
      <div className="BlogSidebar-container">
        <h4>Tags</h4>
        <TagList tags={this.props.tags} />
        <h4>Links</h4>
        <LinkList categories={this.props.categories} />
      </div>
    );
  }
};

