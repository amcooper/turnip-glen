import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import "./styles.css";
import Comment from "../Comment/index.jsx";

class CommentList extends React.Component {
    render () {
        return (
            <ul className="CommentList">
                {this.props.comments.edges.map(edge => {
                    return (
                        <li className="Comment" key={edge.node.id}>
                            <Comment comment={edge.node} />
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default createFragmentContainer(
    CommentList,
    graphql`
    fragment CommentList_comments on CommentConnection {
      edges {
        node {
          id
          ...Comment_comment 
        }
      }
    }
  `
);
