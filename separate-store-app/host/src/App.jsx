import React from "react";
import ReactDOM from "react-dom";

import Header from "nav/Header";

import { StoreProvider, useStore, getStateToRemote } from "store/store";

import "./index.scss";

const App = () => {
  const { count, increment } = useStore();
  console.log('value from shared store', getStateToRemote())
  return (
    <div className="container">
      <Header />
      <div className="host-container">
        <div class="label">Host App</div>
        <div class="label">Count from Shared Store: {count}</div>
        <button
          onClick={increment}
          className="btn"
        >
          Increase Count
        </button>

      </div>
    </div>
  );
};
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("app")
);
