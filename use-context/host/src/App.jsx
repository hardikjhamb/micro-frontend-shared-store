import React from "react";
import ReactDOM from "react-dom";

import Header from "nav/Header";

import { CountProvider, useCount } from "host/store";

import "./index.scss";

const App = () => {
  const [count, setCount] = useCount();
  return (
    <div className="container">
      <Header />
      <div className="host-container">
        <div class="label">Host App</div>
        <div class="label">Count from Shared Store: {count}</div>
        <button
          onClick={() => setCount(count + 1)}
          className="btn"
        >
          Increase Count
        </button>
      </div>
    </div>
  );
};
ReactDOM.render(
  <CountProvider>
    <App />
  </CountProvider>,
  document.getElementById("app")
);
