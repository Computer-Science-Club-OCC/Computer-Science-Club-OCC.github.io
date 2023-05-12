import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../asset/images/logo.png";
import { CloseX, Menu } from "../../asset/icons/icons";
import "./navbar.css";

function NavDesktop() {
	return (
		<div className="nav-links">
			<div className="group h-full mx-2">
				<Link className="group nav-link" to="/homepage">
					Home
				</Link>
				<div className="nav-dropdown">
					<ul>
						<hr />
						<li>
							<Link className="nav-dropdown-link" to="/homepage">
								About
							</Link>
						</li>
						<hr />
						<li>
							<Link className="nav-dropdown-link" to="/homepage">
								News
							</Link>
						</li>
						<hr />
					</ul>
				</div>
			</div>
			<div className="group h-full mx-2">
				<Link className="nav-link" to="/events">
					Events
				</Link>
			</div>
			<div className="group h-full mx-2">
				<Link className="nav-link" to="/projects">
					Projects
				</Link>
			</div>
			<div className="group h-full mx-2">
				<Link className="nav-link" to="/resources">
					Resources
				</Link>
				<div className="nav-dropdown">
					<ul>
						<hr />
						<li>
							<Link to="/tutorials">Tutorials</Link>
						</li>
						<hr />
						<li>
							<Link to="/readings">Readings</Link>
						</li>
						<hr />
						<li>
							<Link to="/organizations">Organizations</Link>
						</li>
						<hr />
					</ul>
				</div>
			</div>
		</div>
	);
}

function NavMobile() {
	const [isShow, setIsShow] = useState(false);

	return (
		<div className="nav-links">
			<button className="nav-mobile-btn" onClick={() => setIsShow(!isShow)}>
				<Menu />
			</button>
			<div
				className={`nav-mobile ${
					isShow ? "animate-slide-in right-0" : "animate-slide-out"
				}`}
			>
				<div className="nav-mobile-btn-wrapper">
					<button className="nav-mobile-btn" onClick={() => setIsShow(!isShow)}>
						<CloseX />
					</button>
				</div>
				<div className="nav-mobile-links">
					<Link className="nav-mobile-link" to="/homepage">
						Home
					</Link>
					<ul>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/news">News</Link>
						</li>
					</ul>
				</div>
				<div className="nav-mobile-links">
					<Link className="nav-mobile-link" to="/events">
						Events
					</Link>
				</div>
				<div className="nav-mobile-links">
					<Link className="nav-mobile-link" to="/projects">
						Projects
					</Link>
				</div>
				<div className="nav-mobile-links">
					<Link className="nav-mobile-link" to="/resources">
						Resources
					</Link>
					<ul>
						<li>
							<Link to="/tutorials">Tutorials</Link>
						</li>
						<li>
							<Link to="/readings">Readings</Link>
						</li>
						<li>
							<Link to="/organizations">Organizations</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default function Navbar() {
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
		if (screenSize.dynamicWidth <= 968) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
		return () => {
			window.removeEventListener("resize", setDimension);
		};
	}, [screenSize]);

	return (
		<nav className="bg-gray-dark  h-16  w-full  py-3 z-20">
			<div className="m-auto flex items-center h-full w-3/4">
				<div className="flex items-center float-left h-full w-auto">
					<Link className="w-full flex " to="/homepage">
						<img
							className="m-0 object-contain rounded-full  h-10 w-10"
							src={Logo}
							alt="logo"
						/>
						<span className="flex ml-4 items-center ">
							<h3 className="font-bold text-2xl mx-0.5 text-orange">OCC</h3>
							<h3 className="font-bold text-2xl mx-0.5 text-blue">CSC</h3>
						</span>
					</Link>
				</div>
				{isMobile ? <NavMobile /> : <NavDesktop />}
			</div>
		</nav>
	);
}
