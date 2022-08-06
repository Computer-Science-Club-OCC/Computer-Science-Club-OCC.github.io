import React, { useState, useEffect } from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { eventsMap as eventsList } from "../fakeData";
import "./events.css";

function EventsList() {
	return (
		<div className="events-list">
			<ListEvents />
		</div>
	);
}
export default EventsList;

// Before Collapsed Components
function EventDate(month, date) {
	return (
		<div className="event-date">
			<p id="month">{month}</p>
			<p id="day">{date}</p>
		</div>
	);
}

function EventHeader(title, time, location) {
	return (
		<div className="event-info">
			<h3 id="title">{title}</h3>
			<p id="important">Time: {time}</p>
			<p id="important">Location: {location}</p>
		</div>
	);
}

// Collapsed Contents
function EventDetails(description, meetingUrl) {
	return (
		<div className="details">
			<p>👨‍🔬{description}</p>
			<p>🔥{description}</p>
			<p>☄️{description}</p>
			<p>
				👉 Zoom link:
				<a id="meeting-link" href={meetingUrl}>
					{meetingUrl}
				</a>
			</p>
			<p>🥳🥳🥳 Check out our posters!!!</p>
		</div>
	);
}

function EventPosters(posterImages) {
	const images = posterImages;
	return (
		<Gallery>
			<div className="poster-list">
				{images.map(image => {
					return (
						<Item
							original={image}
							thumbnail={image}
							width="1068"
							height="1068"
							alt="poster-img"
						>
							{({ ref, open }) => (
								<input
									className="poster-img"
									type="image"
									ref={ref}
									onClick={open}
									src={image}
									alt="poster"
								/>
							)}
						</Item>
					);
				})}
			</div>
		</Gallery>
	);
}

// Render List
function ListEvents() {
	const [isCollapse, setCollapse] = useState({});

	function handleCollapse(id) {
		setCollapse(prevCollapsed => ({
			...prevCollapsed,
			[id]: !prevCollapsed[id],
		}));
	}

	return eventsList.map(singleEvent => {
		return (
			<div tabIndex={singleEvent.id} role="button" className="event">
				<div className="event-header">
					{EventDate(singleEvent.month, singleEvent.day)}
					{EventHeader(
						singleEvent.title,
						singleEvent.time,
						singleEvent.location,
					)}
					<div className="expand-button">
						<button
							type="button"
							onClick={() => handleCollapse(singleEvent.id)}
						/>
					</div>
				</div>
				{isCollapse[singleEvent.id] && (
					<div className="event-expand">
						{EventDetails(singleEvent.description, singleEvent.meetingUrl)}
						{EventPosters(singleEvent.images)}
					</div>
				)}
			</div>
		);
	});
}
