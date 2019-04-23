import React from "react";
import environment from  "../../environment";
import BlogName from "../BlogName/index.jsx";
import BlogSidebar from "../BlogSidebar/index.jsx";

export default class BlogApp extends React.Component {
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
