import React from "react";
import TagList from "../TagList/index.jsx";
import ErrorBoundary from "../ErrorBoundary/index.jsx";
import environment from  "../../environment";
import "./styles.css";

class BlogSidebar extends React.Component {
  render() {
    // debugger; //
    return (
      <div className="BlogSidebar-container">
        <h4>sidebar</h4>
        <TagList tags={this.props.tags} />
      </div>
    );
  }
};

export default BlogSidebar;
