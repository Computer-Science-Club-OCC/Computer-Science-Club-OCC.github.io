import { BookOnline } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import "./resources.css";


export default function Resources() {
  return (
    <>
      <h1>Resources Page</h1>
      <Tab />
    </>
  );
}

function Tab() {
  const [tabState, setTab] = useState(1);
  const [isMobile, setIsMobile] = useState(false);  // Setup for mobile responsive
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
    });
  };

  const toggleTab = (index) => {
    setTab(index)
  }

  useEffect(() => {
    window.addEventListener("resize", setDimension);
    if (screenSize.dynamicWidth <= 630) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  return (
    <div className="resource-container">
      <div className="resource-tab-container">
        <button onClick={() => toggleTab(1)} className={tabState === 1 ? 'resource-tab-btn active' : 'resource-tab-btn' }>Tutorial</button>
        <button onClick={() => toggleTab(2)} className={tabState === 2 ? 'resource-tab-btn active' : 'resource-tab-btn' }>Readings</button>
        <button onClick={() => toggleTab(3)} className={tabState === 3 ? 'resource-tab-btn active' : 'resource-tab-btn' }>Orgs</button>
      </div>
      <div className="tab-contents">
        <div className={tabState === 1 ? 'resource-tab-content active' : 'resource-tab-content'}>
          <h2>Tutorial</h2>
        </div>
        <div className={tabState === 2 ? 'resource-tab-content active' : 'resource-tab-content'}>
          <h2>Readings</h2>
          <BookContent/>
        </div>
        <div className={tabState === 3 ? 'resource-tab-content active' : 'resource-tab-content'}>
          <h2>Organizations</h2>
        </div>
      </div>
    </div>
  )
}

/**
 * Render the content of a book object
 */
function BookContent(tabState) {
  const dummyContent = ContentsMap
  return (
    <>
    {dummyContent.map((book) => {
      return (
        <div className="tab-text">
          <h3>{book.title}</h3>
          <p>{book.context}</p>
          <a href="#">{book.url}</a>
        </div>
      )
    })}
    </>
  )
}

/**
 * Store demo list of books
 * TODO: Replace with backend code to query books from mongodb
 **/ 
const ContentsMap = [
  {
    id: 1,
    title: "BOOK1",
    context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    url: "book1url.com"
  },
  {
    id: 2,
    title: "BOOK2",
    context: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    url: "book2url.com"
  },
  {
    id: 3,
    title: "BOOK3",
    context: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    url: "book3url.com"
  }
]

