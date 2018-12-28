import React from "react";
import ReactDOM from "react-dom";
import { QueryRenderer } from "react-relay";
import environment from "../environment";
import ArticleList from "./ArticleList.jsx";

class App extends React.Component {
  render() {
    return (
      <QueryRenderer 
        environment={environment}
        query={graphql`
          query AppQuery {
            articles {
              edges {
                node {
                  id
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
            <ArticleList articles={props.articles} />
          )
        }}
      />  
    )
  }
}

export default App;