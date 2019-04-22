import React from "react";
import environment from  "../environment";
import BlogName from "./BlogName";
import BlogSidebar from "./BlogSidebar";
import Router from "./Router";
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
