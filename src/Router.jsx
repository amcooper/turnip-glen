import React from "react";
import { BrowserProtocol, queryMiddleware } from "farce";
import {
  createFarceRouter,
  createRender,
  makeRouteConfig,
  Route,
} from "found";
import { Resolver } from "found-relay";
import Viewer from "./Viewer.jsx";
import ArticlePromoList from "./ArticlePromoList.jsx";
import BlogApp from "./BlogApp.jsx";
import Article from "./Article.jsx";
import Loading from "./Loading.jsx";


const Router = createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: makeRouteConfig(
    <Route path="/" Component={BlogApp}>
      <Route Component={ArticlePromoList} query={} />
      <Route 
          path="articles/:id"
          query={}
          render={({ Component, props }) =>
            Component && props ? (
              <Component {...props} />
            ) : (
              <div>
                <small>Loading</small>
              </div>
            )
          }
        />
    </Route>,
  ),
*/
/*
const Router = createFarceRouter({
  historyProtocol: new BrowserProtocol(),
  historyMiddlewares: [queryMiddleware],
  routeConfig: makeRouteConfig(
    <Route
      path="/"
      Component={ArticlePromoList}
      query={graphql`
        query Router_ArticlePromoList_Query {
          articles {
            ...ArticlePromoList_articles
          }
        }
      `}
      render={({ props }) => (props ? <ArticlePromoList {...props} /> : <Loading />)}
    >
      <Route 
        path="articles/:id"
        Component={Article}
        query={graphql`
          query Router_Article_Query($id: ID!) {
            article(id: $id) {
              ...Article_article
            }
          }
        `}
        render={({ props }) => (props ? <Article {...props} /> : <Loading />)}
      />
    </Route>
  ),
  render: createRender({})
});

export default Router;