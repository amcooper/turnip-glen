import { commitMutation, graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';

const mutation = graphql`
  mutation AddCommentMutation($input: NewCommentInput!) {
    addComment(input: $input) {
      commentEdge {
        __typename
        cursor
        node {
          id
          body
          parent_comment_id
          publication_time
          author {
            name
          }
        }
      }
    }
  }
`;

// Completely uncertain about this 
/* function sharedUpdater(store, newComment) {
  const conn = ConnectionHandler.getConnection('CommentList_comments');
  ConnectionHandler.insertEdgeAfter(conn, newComment);
}
*/

let tempID = 0;

function commit(environment, body, parent_comment_id, article_id, author_id) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        body,
        parent_comment_id,
        article_id,
        author_id,
        clientMutationId: String(tempID++)
      }
    },
    onCompleted: (response, errors) => {
      console.log('Response received from server.')
    },
    onError: error => console.error(error),
  });
}

export default { commit };
