import React from "react";
import { graphql, createFragmentContainer } from "react-relay";

class CategoryList extends React.Component {
  render() {
    return (
      <div className="CategoryList">
        {this.props.categories.edges.map((edge) => {
          return (
            <span className="category-list-item" key={edge.node.id}>
              <a href="#">{`${edge.node.cat_name} `}</a>
            </span>
          );
        })}
      </div>
    );
  }
}

export default createFragmentContainer(
  CategoryList,
  graphql`
    fragment CategoryList_categories on CategoryConnection {
      edges {
        node {
          id
          cat_name
          cat_description
        }
      }
    }
  `
);


