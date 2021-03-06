import React from "react";
import ReactDOM from "react-dom";
import Router from "./Router/index.jsx";
import { Resolver } from "found-relay";
import environment from "../environment.js";
import "./index.css";

ReactDOM.render(
  <Router resolver={new Resolver(environment)} />,
  document.getElementById("root")
);

