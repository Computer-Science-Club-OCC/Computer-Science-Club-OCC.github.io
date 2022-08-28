import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { DensityMedium, Clear } from "@mui/icons-material";
import ClubLogo from "../asset/images/club-logo.png";
import "./navbar.css";

function NavigationBar() {
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
					<img className="navbar-brand-img" src={ClubLogo} alt="club-logo" />
				</Link>
				<div className="navbar-title">
					<h1>OCC CS Club</h1>
				</div>

				{isMobile && (
					<div
						className="nav-toggle-icons"
						onClick={() => setIsSwitch(prev => !prev)}
						role="button"
						tabIndex={0}
					>
						{isSwitch ? (
							<Clear className="nav-toggle-icon" fontSize="large" />
						) : (
							<DensityMedium className="nav-toggle-icon" fontSize="large" />
						)}
					</div>
				)}
			</div>
			{(isSwitch || !isMobile) && (
				<div className={isMobile ? "navbar-nav nav-responsive" : "navbar-nav"}>
					<ul className={isMobile ? "nav-responsive-lists" : ""}>
						<li
							className={
								isMobile ? "navbar-item nav-responsive-nav-item" : "navbar-item"
							}
							id={
								isMobile ? "home nav-responsive-nav-item" : "home-navbar-item"
							}
						>
							<div className="dropdown">
								<div className="dropdown-content">
									<Link className="dropdown-link" to="/about">
										&gt; About
									</Link>
									<Link className="dropdown-link" to="/opportunity">
										&gt; Opportunity
									</Link>
								</div>
								<Link
									className={
										isMobile ? "navbar-link nav-responsive-link" : "navbar-link"
									}
									id={
										isMobile ? "home nav-responsive-link" : "home-navbar-link"
									}
									to="/homepage"
								>
									Home
								</Link>
							</div>
						</li>
						<li
							className={
								isMobile ? "navbar-item nav-responsive-nav-item" : "navbar-item"
							}
							id={
								isMobile
									? "activity nav-responsive-nav-item"
									: "activity-navbar-item"
							}
						>
							<div className="dropdown">
								<div className="dropdown-content">
									<Link className="dropdown-link" to="/activity/events">
										&gt; Events
									</Link>
									<Link className="dropdown-link" to="/activity/projects">
										&gt; Projects
									</Link>
								</div>
								<Link
									className={
										isMobile ? "navbar-link nav-responsive-link" : "navbar-link"
									}
									id={
										isMobile
											? "activity nav-responsive-link"
											: "activity-navbar-link"
									}
									to=""
								>
									Activity
								</Link>
							</div>
						</li>
						<li
							className={
								isMobile ? "navbar-item nav-responsive-nav-item" : "navbar-item"
							}
							id={
								isMobile
									? "resources nav-responsive-nav-item"
									: "resources-navbar-item"
							}
						>
							<div className="dropdown">
								<div className="dropdown-content">
									<Link
										className="dropdown-link"
										to="/resources"
										state={{ option: 1 }}
									>
										&gt; Tutorials
									</Link>
									<Link
										className="dropdown-link"
										to="/resources"
										state={{ option: 2 }}
									>
										&gt; Readings
									</Link>
									<Link
										className="dropdown-link"
										to="/resources"
										state={{ option: 3 }}
									>
										&gt; Organizations
									</Link>
								</div>
								<Link
									className={
										isMobile ? "navbar-link nav-responsive-link" : "navbar-link"
									}
									id={
										isMobile
											? "resources nav-responsive-link"
											: "resources-navbar-link"
									}
									to="/resources"
									state={{ option: 1 }}
								>
									Resources
								</Link>
							</div>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
}

export default NavigationBar;
