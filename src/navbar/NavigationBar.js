import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ClubLogo from "../asset/images/club-logo.png";
import "./navbar.css";
import { DensityMedium, Clear } from "@mui/icons-material";

const NavigationBar = () => {
  // Will refine navbar in React way
  const [isSwitch, setIsSwitch] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
  });

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
    });
  };

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
    <nav className="navbar">
      <div className="navbar-brand">
        <Link className="navbar-img-link" to="/homepage">
          <img
            className="navbar-brand-img"
            src={ClubLogo}
            alt="club-logo"
          ></img>
        </Link>
        <div className="navbar-title">
          <h1>OCC CS Club</h1>
        </div>

        {isMobile && (
          <div
            className="nav-toggle-icons"
            onClick={() => setIsSwitch((prev) => !prev)}
          >
            {isSwitch ? (
              <Clear className="nav-toggle-icon" fontSize="large" />
            ) : (
              <DensityMedium className="nav-toggle-icon" fontSize="large" />
            )}
          </div>
        )}
      </div>
      {(isSwitch || !isMobile) && <div className={isMobile ? "navbar-nav nav-responsive" : "navbar-nav"}>
        <ul className={isMobile && "nav-responsive-lists"}>
          <li
            className={
              isMobile ? "navbar-item nav-responsive-nav-item" : "navbar-item"
            }
          >
            <div className="dropdown">
              <Link
                className={
                  isMobile ? "navbar-link nav-responsive-link" : "navbar-link"
                }
                to="/homepage"
              >
                {" "}
                Home
              </Link>
              <div className="dropdown-content">
                <Link className="dropdown-link" to="/about">
                  {" "}
                  &gt; About
                </Link>
                <Link className="dropdown-link" to="/opportunity">
                  {" "}
                  &gt; Opportunity
                </Link>
              </div>
            </div>
          </li>
          <li
            className={
              isMobile ? "navbar-item nav-responsive-nav-item" : "navbar-item"
            }
          >
            <div class="dropdown">
              <Link
                className={
                  isMobile ? "navbar-link nav-responsive-link" : "navbar-link"
                }
                to="/activity"
              >
                Activity
              </Link>
              <div className="dropdown-content">
                <Link className="dropdown-link" to="/activity/events">
                  {" "}
                  &gt; Event
                </Link>
                <Link className="dropdown-link" to="/activity/projects">
                  {" "}
                  &gt; Project
                </Link>
              </div>
            </div>
          </li>
          <li
            className={
              isMobile ? "navbar-item nav-responsive-nav-item" : "navbar-item"
            }
          >
            <div className="dropdown">
              <Link
                className={
                  isMobile ? "navbar-link nav-responsive-link" : "navbar-link"
                }
                to="/resources"
              >
                Resources
              </Link>
              <div className="dropdown-content">
                <Link className="dropdown-link" to="/events">
                  {" "}
                  &gt; Tutorial
                </Link>
                <Link className="dropdown-link" to="/projects">
                  {" "}
                  &gt; Research
                </Link>
                <Link className="dropdown-link" to="/projects">
                  {" "}
                  &gt; Organizations
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>}
    </nav>
  );
};

export default NavigationBar;

function Dropdown() {
  return;
}

const NavItemMap = [
  {
    title: "Home",
    submenu: [],
  },
  {
    title: "Activity",
    submenu: [],
  },
  {
    title: "Resource",
    submenu: [],
  },
];
