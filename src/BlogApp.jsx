import React from "react";
import BlogName from "./BlogName.jsx";
import BlogSidebar from "./BlogSidebar.jsx";
import Viewer from "./Viewer.jsx";

export default class BlogApp extends React.Component {
  render() {
    return(
      <>
        <BlogName />
        <Viewer view="Article" articleId="5" />
        {/* <Viewer view="ArticlePromoList" /> */}
        {/* <Viewer view="Page" pageId="4" /> */}
        <BlogSidebar />
      </>
    );
  }
}