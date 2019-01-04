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
        <Router resolver={new Resolver(environment)} />
        {/* <Viewer view="Article" articleId="2" /> */}
        {/* <Viewer view="ArticlePromoList" /> */}
        {/* <Viewer view="Page" pageId="4" /> */}
        <BlogSidebar />
      </>
    );
  }
}