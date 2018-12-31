import React from "react";

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