import { useState } from "react";
import PropTypes from "prop-types";
import { IconButton, Tooltip } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Gallery, Item } from "react-photoswipe-gallery";
import { eventsMap as eventsList } from "../fakeData";

import "./events.css";
import "photoswipe/dist/photoswipe.css";

// Before expanding components
function EventDate({ month, date }) {
	return (
		<div className="event-date">
			<p id="month">{month}</p>
			<p id="day">{date}</p>
		</div>
	);
}

EventDate.propTypes = {
	month: PropTypes.number.isRequired,
	date: PropTypes.number.isRequired,
};

function EventHeader({ title, time, location }) {
	return (
		<div className="event-info">
			<h3 id="title">{title}</h3>
			<div className="timeplace">
				<p>Time: {time}</p>
				<p>Location: {location}</p>
			</div>
		</div>
	);
}

EventHeader.propTypes = {
	title: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
};

// Expanded Contents
function EventDetails({ description, meetingUrl }) {
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

EventDetails.propTypes = {
	description: PropTypes.string.isRequired,
	meetingUrl: PropTypes.string.isRequired,
};

function EventPosters({ posterImages }) {
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

EventPosters.propTypes = {
	posterImages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function ExpandButton(buttonState, isExpanded) {
	return (
		<div className="expand-button">
			<Tooltip
				title={!isExpanded ? "expand" : "collapse"}
				fontSize="large"
				placement="top"
				sx={{ fontSize: "16px" }}
				arrow
			>
				<IconButton type="button" onClick={buttonState}>
					<KeyboardArrowDown
						className="expand-icon"
						fontSize="large"
						id={isExpanded ? "open" : "closed"}
					/>
				</IconButton>
			</Tooltip>
		</div>
	);
}

// Render List
function EventsList() {
	const [isExpanded, setExpand] = useState({});

	function handleExpansion(id) {
		setExpand(prevExpanded => ({
			...prevExpanded,
			[id]: !prevExpanded[id],
		}));
	}

	return (
		<div className="events-list">
			{eventsList.map(singleEvent => {
				return (
					<div tabIndex={singleEvent.id} role="button" className="event">
						<div className="event-header">
							<EventDate month={singleEvent.month} date={singleEvent.date} />
							<EventHeader
								title={singleEvent.title}
								time={singleEvent.time}
								location={singleEvent.location}
							/>
							{ExpandButton(
								() => handleExpansion(singleEvent.id),
								isExpanded[singleEvent.id],
							)}
						</div>
						<div
							className="event-expand"
							id={isExpanded[singleEvent.id] ? "expanded" : "collapsed"}
						>
							<EventDetails
								description={singleEvent.description}
								meetingUrl={singleEvent.meetingUrl}
							/>
							<EventPosters posterImages={singleEvent.images} />
						</div>
					</div>
				);
			})}
		</div>
	);
}
export default EventsList;
