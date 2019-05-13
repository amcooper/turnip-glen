import React from "react";
import { graphql, createFragmentContainer } from "react-relay";

class CategoryList extends React.Component {
  render() {
    return (
      <ul className="CategoryList">
        {this.props.categories.edges.map((edge) => {
          return (
            <li key={edge.node.id}>
              <p>{edge.node.cat_name}</p>
              <ul className="CategeoryLinkList">
                {edge.node.links.edges.map((linkEdge) => {
                  <li key={linkEdge.node.id}>
                    <a href="{linkEdge.node.url}">{linkEdge.node.name}</a> 
                  </li>
                })}
              </ul>
            </li>
          );
        })}
      </ul>
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
          links {
            edges {
              node {
                id
                name
                url
              }
            }
          } 
        }
      }
    }
  `
);


