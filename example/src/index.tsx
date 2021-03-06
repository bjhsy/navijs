import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { bootstrap } from "@fyl080801/navijs/";
import "antd/dist/antd.css";
import "@fyl080801/navijs/src/index.css";
import Site from "./site.json";

bootstrap({
  site: new Promise(resolve => {
    resolve(Site);
  })
});

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
