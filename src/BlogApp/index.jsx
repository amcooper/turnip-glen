import React from "react";
import environment from  "../environment";
import BlogName from "./BlogName.jsx";
import BlogSidebar from "./BlogSidebar.jsx";
import Router from "./Router.jsx";
import { Resolver } from "found-relay";

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