import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import CommentList from "./CommentList";
import AddCommentMutation from "./mutations/AddCommentMutation.js";
import CommentInput from "./CommentInput";

class Article extends React.Component {
    constructor(props) {
        super(props);
        this._handleCommentInputSave = this._handleCommentInputSave.bind(this);
    }
    
    _handleCommentInputSave({body}) {
        AddCommentMutation.commit(
            this.props.relay.environment,
            body,
            undefined,
            this.props.article.id,
            "QXV0aG9yOjE1" // id of Lizzie Francini
        );
    }
  
    render() {
        return (
            <div className="ArticleWithComments">
                <div className="Article">
                    <div className="ArticleImageContainer">
                        <img src={this.props.article.image_url} />
                    </div>
                    <h2>{this.props.article.headline}</h2>
                    <h3>{this.props.article.subhed}</h3>
                    <p>by {this.props.article.authors.edges.map(edge => edge.node.name).join(" and ")}</p>
                    <p>{(new Date(parseInt(this.props.article.publication_time, 10))).toDateString()}</p>
                    <p>{this.props.article.body}</p>
                </div>
                <div className="CommentsContainer">
                    <h4>Commentary</h4>
                    <CommentInput 
                        className="new-comment"
                        onSave={this._handleCommentInputSave}
                        placeholder="Let. Her. Rip."
                    />
                    <CommentList comments={this.props.article.comments} />
                </div>
            </div>
        );
    }
}

export default createFragmentContainer(
    Article,
    graphql`
    fragment Article_article on Article {
      id
      image_url
      headline
      subhed
      publication_time
      body
      authors {
        edges {
          node {
            name
            email
          }
        }
      }
      comments {
        ...CommentList_comments 
      }
    }
  ` // Do I need to drill down in the comments here?
);
