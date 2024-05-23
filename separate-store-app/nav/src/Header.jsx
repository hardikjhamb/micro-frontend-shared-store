import React from "react";

import { useStore } from "store/store";

import "./index.scss";

export default () => {
  const { count, clear } = useStore();
  return (
    <header className="header-container">
      <div class="label">Remote App Header</div>
      <div className="count-container">
        {`Count from Shared Store ${count}`}

        <button
          onClick={clear}
          className="btn"
        >
          Decrease Count
        </button>
      </div>
    </header>
  );
};
