import React, { useState } from "react";

import "./resources.css";

export default function Resources() {
  const [tabState, setTabState] = useState({
    btn1: true,
    btn2: false,
    btn3: false,
  });
  function handleTabStateChange(btn) {
    const initialState = {
      btn1: false,
      btn2: false,
      btn3: false,
    };
    if (btn === 1) {
      initialState.btn1 = true;
    } else if (btn === 2) {
      initialState.btn2 = true;
    } else {
      initialState.btn3 = true;
    }
    setTabState({
      ...initialState,
    });
  }
  return (
    <div className="resources-container">
      <div className="resources-wrapper">
        <div className="resources-buttons">
          <button
            onClick={() => handleTabStateChange(1)}
            className="resources-button"
          >
            Tutorial
          </button>
          <button
            onClick={() => handleTabStateChange(2)}
            className="resources-button"
          >
            Research
          </button>
          <button
            onClick={() => handleTabStateChange(3)}
            className="resources-button"
          >
            Organizations
          </button>
        </div>
        {tabState.btn1 && (
          <div className="resources-info">
            <div className="resources-title">TAB 1</div>
            <div className="resources-desc">
              <span>Scholarships:</span>
              <ul className="resources-list">
                <li>Our scholarship application period is currently closed.</li>
              </ul>
              <span>Programs:</span>
              <ul className="resources-list">
                <li>Early Research Scholars Programs.</li>
              </ul>
            </div>
          </div>
        )}
        {tabState.btn2 && (
          <div className="resources-info">
            <div className="resources-title">TAB 2</div>
            <div className="resources-desc">
              <span>Scholarships:</span>
              <ul className="resources-list">
                <li>Our scholarship application period is currently closed.</li>
              </ul>
              <span>Programs:</span>
              <ul className="resources-list">
                <li>Early Research Scholars Programs.</li>
              </ul>
            </div>
          </div>
        )}
        {tabState.btn3 && (
          <div className="resources-info">
            <div className="resources-title">TAB 3</div>
            <div className="resources-desc">
              <span>Scholarships:</span>
              <ul className="resources-list">
                <li>Our scholarship application period is currently closed.</li>
              </ul>
              <span>Programs:</span>
              <ul className="resources-list">
                <li>Early Research Scholars Programs.</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
