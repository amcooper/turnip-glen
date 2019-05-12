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
        <BlogSidebar tags={this.props.tags} />
      </>
    );
  }
}

export default createFragmentContainer(
  BlogApp,
  graphql`
    fragment BlogApp_tags on TagConnection {
      edges {
        node {
          id
          tag_name
          tag_description
        }
      }
    }
  `
);

