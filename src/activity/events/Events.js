import { useState, useEffect } from "react";
import EventsList from "./EventsList";
import "./events.css";

function Events() {
	return (
		<div className="events-container">
			<EventsHeader />
			<EventsList />
		</div>
	);
}
export default Events;

function EventsHeader() {
	return (
		<div className="events-header">
			<h1>Events</h1>
		</div>
	);
}
