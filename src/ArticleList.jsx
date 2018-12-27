import React from "react";
import ReactDOM from "react-dom";
import { graphql, QueryRenderer } from "react-relay";
import environment from "../environment.js";
import ArticleListItem from "./ArticleListItem.jsx";
import "./ArticleList.css";


class ArticleList extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query ArticleListQuery {
            articles {
              edges {
                node {
                  id
<<<<<<< HEAD
                  image_url
                  headline
                  subhed
                  excerpt
=======
                  headline
                  subhed
                  excerpt
                  image_url
                  publication_time
                  authors {
                    edges {
                      node {
                        name
                      }
                    }
                  }
>>>>>>> a990f9c25b95a1823752c1c08e25cfd2248de274
                }
              }
            }
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            console.error(error);
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return (
            <ul className="ArticleList">
<<<<<<< HEAD
              {props.articles.map(article => 
                <li key={article.id}><ArticleListItem article={article} /></li>
=======
              {props.articles.edges.map(article => 
                <li key={article.node.id}><ArticleListItem article={article.node} /></li>
>>>>>>> a990f9c25b95a1823752c1c08e25cfd2248de274
              )}
            </ul>
          )
        }}
      />
    )
  }
}

export default ArticleList;