import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './activity.css';
import Events from './Events';
import Projects from './Projects';

/*
Create card tab Event | Project both underline + hover highlight box
v-Link tab to component -> how to link subpage
Use Hook to change card tab
Create Event and Project Container
Event Container:

Square box: Dat center large font 46px, Time below
Click view detail, box will expand

Line break

Container inlcude: 
	Shadow: Hover expand
	Card: Image, title, Url, Description, update (except project)
*/



const Activity = () => {
	return (
	<div>
		<h1>Activity</h1>
		<Tab />
	</div>);
};

export default Activity;

function Tab() {
	const [tabState, setTab] = useState(1)

	const toggleTab = (index) => {
		setTab(index)
	}

	return (
		<>
			<div className='tab-container'>
				{/* <Link to='/activity/events' className='tab-button'>Events</Link>
				<Link to='activity/projects' className='tab-button'>Projects</Link> */}
				<div className='tabs'>
					<button type='button' onClick={() => toggleTab(1)} className={tabState == 1 ? 'tab-button active' : 'tab-button'}>Events</button>
					<button type='button' onClick={() => toggleTab(2)} className={tabState == 2 ? 'tab-button active' : 'tab-button'}>Projects</button>
				</div>
				<div className="tab-contents">
					<div className={tabState == 1 ? 'tab-content active-content': 'tab-content'}>
						<h2>Title 1</h2>
						<img src="#" />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
							nisi ut aliquip ex ea commodo consequat.</p>
					</div>
					<div  className={tabState == 2 ? 'tab-content active-content': 'tab-content'}>
						<h2>Title 2</h2>
						<img src="#" />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</div>
				</div>
			</div>
		</>
	)
}
