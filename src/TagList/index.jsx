import React from "react";
import { graphql, createFragmentContainer } from "react-relay";

export default class TagList extends React.Component {
  render() {
    return (
      <div className="TagList">
        {this.props.tags.edges.map((edge) => {
          return (
            <span className="tag-list-item" key={edge.node.id}>
              <a href="#">{`${edge.node.name} `}</a>
            </span>
          );
        })}
      </div>
    );
  }
}

