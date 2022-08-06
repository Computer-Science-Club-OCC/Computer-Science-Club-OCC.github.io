import { useState, useEffect } from "react";
// import { PacmanLoader } from "react-spinners";
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

function EventDate(month, date) {
	// const [isMobile, setIsMobile] = useState(false);
	// const [screenSize, getDimension] = useState({
	// 	dynamicWidth: window.innerWidth,
	// });

	// const setDimension = () => {
	// 	getDimension({ dynamicWidth: window.innerWidth });
	// };

	// useEffect(() => {
	// 	window.addEventListener("resize", setDimension);
	// 	if (screenSize.dynamicWidth <= 630) {
	// 		setIsMobile(true);
	// 	} else {
	// 		setIsMobile(false);
	// 	}
	// 	return () => {
	// 		window.removeEventListener("resize", setDimension);
	// 	};
	// });
	// <div className={!isMobile ? "event-date" : "event-date responsive"}>
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

function EventDetails(description, image, meetingUrl) {
	return (
		<div className="event-expand">
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
			<ul className="poster-list">
				<li>
					<input className="poster-img" type="image" src={image} alt="text" />
				</li>
				<li>
					<input className="poster-img" type="image" src={image} alt="text" />
				</li>
			</ul>
		</div>
	);
}

function ListEvents() {
	const [isCollapse, setCollapse] = useState({});
	// const [isLoading, setLoading] = useState(false);

	function handleCollapse(id) {
		setCollapse(prevCollapsed => ({
			...prevCollapsed,
			[id]: !prevCollapsed[id],
		}));
		// setLoading(true);
	}

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setLoading(false);
	// 	}, 1500);
	// }, [isCollapse]);

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
						>
							{/* <ArrowDropDown color="success" fontSize="large"/> */}
						</button>
					</div>
				</div>
				{isCollapse[singleEvent.id] &&
					EventDetails(
						singleEvent.description,
						singleEvent.image,
						singleEvent.meetingUrl,
					)}
			</div>
		);
	});
}
