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
		Activity
		<Tab />
		<Events />;
		<Projects />;
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
			</div>
		</>
	)
}
