import React from "react";
import { graphql, createFragmentContainer } from "react-relay";

class TagList extends React.Component {
  render() {
    return (
      <div className="TagList">
        {this.props.tags.edges.map((edge) => {
          return (
            <span className="tag-list-item">
              <a href="#">{`${edge.node.name} `}</a>
            </span>
          );
        })}
      </div>
    );
  }
}

export default createFragmentContainer(
  TagList,
  graphql`
    fragment TagList_tags on TagConnection {
      edges {
        node {
          name 
        }
      }
    }
  `
);

