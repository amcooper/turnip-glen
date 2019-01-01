import React from "react";
import BlogName from "./BlogName.jsx";
import BlogSidebar from "./BlogSidebar.jsx";
import Viewer from "./Viewer.jsx";

export default class BlogApp extends React.Component {
  render() {
    return(
      <>
        <BlogName />
        <Viewer view="ArticlePromoList" />
        <BlogSidebar />
      </>
    );
  }
}