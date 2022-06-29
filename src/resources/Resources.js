import React, { useState, useEffect } from "react";
import "./resources.css";

export default function Resources() {
  return (

    <>
      <h1>Resources Page</h1>
      <Tab />
      <div className="resources-container">
      <div className="resources-wrapper">
        <div className="resources-info">
          <div className="resources-title">Scholarships & Programs</div>
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
          <div className="resources-info">
            <div className="resources-title">Must Reads</div>
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
          <div className="resources-info">
            <div className="resources-title">Similar Orgs</div>
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
        </div>
      </div>
    </>

 
  );
}

function Tab() {

  const [tabState, setTab] = useState(1);

  const toggleTab = (index) => {
    setTab(index)
  }

  return (
    <div className="tab-container">
      <h1>This the resource tab component</h1>
      <button>Tutorial</button>
      <button>Readings</button>
      <button>Orgs</button>
      <div className="tab-dropdown container">
        <div className="tab-dropdown-content">
          <h3>Tutorial Content</h3>
        </div>
        <div className="tab-dropdown-content">
          <h3>Tutorial Content</h3>
        </div>
        <div className="tab-dropdown-content">
          <h3>Tutorial Content</h3>
        </div>
      </div>
    </div>
  )
}


function TabContent () {
  

  return 
  (
    <>
    </>
  )
}