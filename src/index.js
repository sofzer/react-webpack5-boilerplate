import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import CounterContainer from "./containers/counter/counter.container";

import "./index.scss";
import store from "./reducers/store";

export const App = () => {
  return (
    <>
      <h1>Hello World!</h1>
      <CounterContainer/>
    </>
  );
};

if (document.querySelector("#root")) {
  ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector("#root"));
}
