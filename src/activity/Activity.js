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
	<div className="activity-container">
		<h1 className="activity-title">Activity</h1>
		<Tab className="tab-components"/>
	</div>);
};

export default Activity;

function Tab() {
	// const [buttonActive, showActive] = useState(False)
	return (
		<>
			<div className='tab-container'>
				{/* <Link to='/activity/events' className='tab-button'>Events</Link>
				<Link to='activity/projects' className='tab-button'>Projects</Link> */}
				<div className='tabs'>
					<button type='button' className='tab-button'>Events</button>
					<button type='button' className='tab-button'>Projects</button>
				</div>
				<div className="tab-contents">
					<div className="tab-content">
						<h2>Title 1</h2>
						<img src="#" />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.</p>
					</div>
					<div className="tab-content">
						<h2>Title 2</h2>
						<img src="#" />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.</p>
					</div>
				</div>
			</div>
		</>
	)
}
