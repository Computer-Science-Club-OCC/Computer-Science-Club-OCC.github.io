import { useState, useEffect } from "react";
import "./events.css";

function EventsList() {
	return (
		<div className="events-list">
			<ListEvents />
		</div>
	);
}
export default EventsList;

// TODO: Remove eventsList when using fakeData.js
const eventsList = [
	{
		id: 1,
		title: "Event #1",
		month: "Jul",
		day: "01",
		location: "Room101",
		time: "3:00pm",
	},
	{
		id: 2,
		title:
			"Event #2 Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
		month: "Aug",
		day: "08",
		location: "Room202",
		time: "4:00pm",
	},
];

function ListEvents() {
	return eventsList.map(singleEvent => {
		const click = () => {
			console.log("Clicked");
		};

		return (
			<button
				className="event"
				key={singleEvent.id}
				type="button"
				onClick={click}
			>
				<div className="event-date">
					<p id="month">{singleEvent.month}</p>
					<p id="day">{singleEvent.day}</p>
				</div>
				<div className="event-info">
					<h3 id="title">{singleEvent.title}</h3>
					<p id="important">Time: {singleEvent.time}</p>
					<p id="important">Location: {singleEvent.location}</p>
				</div>
			</button>
		);
	});
}
