import React from "react";
import TagList from "../TagList/index.jsx";

class BlogSidebar extends React.Component {
  render() {
    return (
      <div className="BlogSidebar-container">
        <h4>sidebar</h4>
        <TagList />
      </div>
    );
  }
};

export default BlogSidebar;
