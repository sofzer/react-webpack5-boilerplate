import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

export const App = () => {

  return (
      <h1>Hello World!</h1>
  );
};

if (document.querySelector("#root")) {
  ReactDOM.render(<App />, document.querySelector("#root"));
}
