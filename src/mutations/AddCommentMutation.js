import { commitMutation, graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';

const mutation = graphql`
  mutation addComment($input: NewCommentInput!) {
    addComment(input: $input) {
      comment {
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
`;

// Completely uncertain about this 
function sharedUpdater(store, newComment) {
  const conn = ConnectionHandler.getConnection('CommentList_comments');
  ConnectionHandler.insertEdgeAfter(conn, newComment);
}

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
    updater: store => {
      const payload = store.getRootField('addComment');
      const newComment = payload.getLinkedRecord('comment');
      sharedUpdater(store, newComment);
    },
    optimisticUpdater: store => {
      const id = 'client:newComment:' + tempID++;
      const node = store.create(id, 'Comment');
      node.setValue(body, 'comment body');
      node.setValue(id, 'id');
      const newComment = store.create('client:newComment' + tempID++);
      newComment.setLinkedRecord(node, 'node');
      sharedUpdater(store, newComment);
    },
    onCompleted: (response, errors) => {
      console.log('Response received from server.')
    },
    onError: error => console.error(error),
  });
}

export default { commit };