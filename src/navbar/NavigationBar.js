import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import ClubLogo from '../asset/images/club-logo.png';
import './navbar.css';


const NavigationBar = () => {
	// Will refine navbar in React way 
	return (
			<nav className='navbar'>
				<div className="navbar-brand">
						<Link className="navbar-img-link" to="/homepage">
							<img className="navbar-brand-img" src={ClubLogo} alt="club-logo"></img>
						</Link>
						<div className="navbar-title">
							<h1>OCC CS Club</h1>
						</div>
				</div>	
				<ul className="navbar-nav">
					<li className="navbar-item">
						<div className="dropdown">
							<Link className="navbar-link" to="/homepage"> Home</Link>
							<div className="dropdown-content">
								<Link className="dropdown-link" to="/about"> &gt; About</Link>
								<Link className="dropdown-link" to="/opportunity"> &gt; Opportunity</Link>
							</div>
						</div>
					</li>
					<li className="navbar-item">
						<div class="dropdown">
							<Link className="navbar-link" to="/activity">Activity</Link>
							<div className="dropdown-content">
								<Link className="dropdown-link" to="/activity/events"> &gt; Event</Link>
								<Link className="dropdown-link" to="/activity/projects"> &gt; Project</Link>
							</div>
						</div>
					</li>
					<li className="navbar-item">
						<div class="dropdown">
							<Link className="navbar-link" to="/resources">Resources</Link>
							<div className="dropdown-content">
								<Link className="dropdown-link" to="/events"> &gt; Tutorial</Link>
								<Link className="dropdown-link" to="/projects"> &gt; Research</Link>
								<Link className="dropdown-link" to="/projects"> &gt; Organizations</Link>
							</div>
						</div>
					</li>
				</ul>
			</nav>	
	);
};

export default NavigationBar;

function Dropdown() {
	return
}


const NavItemMap =[
	{
		title: "Home",
		submenu: [

		],
	},
	{
		title: "Activity",
		submenu: [

		],
	},
	{
		title: "Resource",
		submenu: [

		],
	}
]