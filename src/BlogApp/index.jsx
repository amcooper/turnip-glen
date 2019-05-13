import React from "react";
import environment from  "../../environment";
import { graphql, QueryRenderer, createFragmentContainer } from "react-relay";
import BlogName from "../BlogName/index.jsx";
import BlogSidebar from "../BlogSidebar/index.jsx";

class BlogApp extends React.Component {
  render() {
    return(
      <>
        <BlogName />
        {this.props.children}
        <BlogSidebar />
      </>
    );
  }
}

