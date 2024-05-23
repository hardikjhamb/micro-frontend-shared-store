import React from "react";

import { useCount } from "host/store";

import "./index.scss";

export default () => {
  const [count, setCount] = useCount();
  return (
    <header className="header-container">
      <div class="label">Remote App Header</div>
      <div className="count-container">
        {`Count from Shared Store ${count}`}

        <button
          onClick={() => setCount(0)}
          className="btn"
        >
          Decrease Count
        </button>
      </div>
    </header>
  );
};
