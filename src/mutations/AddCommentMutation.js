import { commitMutation, graphql } from "react-relay";

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

function commit(environment, body, parentCommentId, articleId, authorId) {
  return commitMutation(environment, {
    mutation,
    variables: {
      input: {
        body,
        parentCommentId: null, // parentCommentId,
        articleId,
        authorId,
        /* clientMutationId: String(tempID++) */
      }
    },
    onCompleted: () => {
      // TODO: Remove this log
      console.log("Response received from server."); // eslint-disable-line no-console 
    },
    onError: error => console.error(error), // eslint-disable-line no-console 
  });
}

export default { commit };

