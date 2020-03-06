import React, { PureComponent, lazy, Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./app.js";

const mainEl = document.getElementById("layout");

ReactDOM.render(<App />, mainEl);