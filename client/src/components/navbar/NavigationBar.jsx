import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClubLogo from "../../asset/images/club-logo.png";
import { CloseX, Menu } from "../../asset/icons/icons";
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
		if (screenSize.dynamicWidth <= 768) {
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
			<div className="navbrand">
				<Link className="nav-imd-link" to="/homepage">
					<img className="navbar-brand-img" src={ClubLogo} alt="club-logo" />
				</Link>
				<div className="navbar-title">
					<h1>OCC CS Club</h1>
				</div>

				{isMobile && (
					<button
						className="responsive-btn"
						onClick={() => setIsSwitch(prev => !prev)}
						type="button"
						tabIndex={0}
					>
						{isSwitch ? (
							<svg className="w-12 h-12">{CloseX}</svg>
						) : (
							<svg className="w-12 h-12 text-black hover:text-white">
								{Menu}
							</svg>
						)}
					</button>
				)}
			</div>
			{(isSwitch || !isMobile) && (
				<div className={isMobile ? "navbar-nav responsive" : "navbar-nav"}>
					<ul className={isMobile ? "responsive-lists" : ""}>
						<li
							className={
								isMobile
									? "group navbar-item responsive-item"
									: "group navbar-item"
							}
							id={isMobile ? "responsive-item" : ""}
						>
							<div className="group dropdown">
								<div className="dropdown-content">
									<Link
										className="dropdown-link"
										to="/homepage"
										state={{ option: 1 }}
									>
										About
									</Link>
									<Link
										className="dropdown-link"
										to="/homepage"
										state={{ option: 2 }}
									>
										News
									</Link>
									<Link
										className="dropdown-link"
										to="/homepage"
										state={{ option: 3 }}
									>
										Contact Us
									</Link>
								</div>
								<Link
									className={
										isMobile ? "navbar-link responsive-link" : "navbar-link"
									}
									id={isMobile ? "responsive-link" : ""}
									to="/homepage"
								>
									Home
								</Link>
							</div>
						</li>
						<li
							className={
								isMobile
									? "group navbar-item responsive-item"
									: "group navbar-item"
							}
							id={isMobile ? "responsive-item" : ""}
						>
							<Link
								className={
									isMobile ? "navbar-link responsive-link" : "navbar-link"
								}
								id={isMobile ? "responsive-link" : ""}
								to="/events"
							>
								Events
							</Link>
						</li>
						<li
							className={
								isMobile
									? "group navbar-item responsive-item"
									: "group navbar-item"
							}
							id={isMobile ? "responsive-item" : ""}
						>
							<Link
								className={
									isMobile ? "navbar-link responsive-link" : "navbar-link"
								}
								id={isMobile ? "responsive-link" : ""}
								to="/projects"
							>
								Projects
							</Link>
						</li>
						<li
							className={
								isMobile
									? "group navbar-item responsive-item"
									: "group navbar-item"
							}
							id={isMobile ? "responsive-item" : ""}
						>
							<div className="dropdown">
								<div className="dropdown-content">
									<Link
										className="dropdown-link"
										to="/resources"
										state={{ option: 1 }}
									>
										Tutorials
									</Link>
									<Link
										className="dropdown-link"
										to="/resources"
										state={{ option: 2 }}
									>
										Readings
									</Link>
									<Link
										className="dropdown-link"
										to="/resources"
										state={{ option: 3 }}
									>
										Organizations
									</Link>
								</div>
								<Link
									className={
										isMobile ? "navbar-link responsive-link" : "navbar-link"
									}
									id={isMobile ? "responsive-link" : ""}
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
