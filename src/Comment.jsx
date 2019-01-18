import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
// import "./Comment.css";

class Comment extends React.Component {
  render() {
    console.log("\n*****\n* Comment - t.p.comment: ", this.props.comment);
    const { body, publication_time, author } = this.props.comment;
    return (
      <div className="Comment">
        <p className="CommentBody">{body}</p>
        <p className="PublicationTime">&mdash;{author.name}&nbsp;&mdash;&nbsp;{(new Date(parseInt(publication_time, 10))).toDateString()}</p>
      </div>
    )
  }
}

export default createFragmentContainer(
  Comment,
  graphql`
    fragment Comment_comment on Comment {
      body
      publication_time
      author {
        name
      }
    }
  `
)