import { useState } from "react";
import EventsHeader from "./components/EventsHeader";
import EventDate from "./components/EventDate";
import EventShort from "./components/EventShort";
import EventDetails from "./components/EventDetails";
import EventPosters from "./components/EventPosters";
import ExpandButton from "./components/ExpandButton";
import EventPagination from "./components/Pagination";
import "./events.css";

const DEFAULT_PAGE = 1;

// Render List
function Events() {
	const [isExpanded, setExpand] = useState({});
	const [currentEvents, setCurrentEvents] = useState([]);
	const [page, setPage] = useState(DEFAULT_PAGE);

	function handleExpansion(id) {
		setExpand(prevExpanded => ({
			...prevExpanded,
			[id]: !prevExpanded[id],
		}));
	}

	const renderEvents = currentEvents.map(event => {
		return (
			<div tabIndex={event.id} role="button" className="event">
				<div className="event-header">
					<EventDate month={event.month} date={event.date} />
					<EventShort
						title={event.title}
						time={event.time}
						location={event.location}
					/>
					<ExpandButton
						handleClick={() => handleExpansion(event.id)}
						isExpanded={isExpanded[event.id]}
					/>
				</div>
				<div
					className="event-expand"
					id={isExpanded[event.id] ? "expanded" : "collapsed"}
				>
					<EventDetails
						description={event.description}
						meetingUrl={event.meetingUrl}
					/>
					<EventPosters posterImages={event.images} />
				</div>
			</div>
		);
	});

	return (
		<div className="event-container">
			<EventsHeader />
			<div className="events-list">
				<EventPagination
					setEvents={events => setCurrentEvents(events)}
					setPage={page => setPage(page)}
					page={page}
				/>
				{renderEvents}
				<EventPagination
					setEvents={events => setCurrentEvents(events)}
					setPage={page => setPage(page)}
					page={page}
				/>
			</div>
		</div>
	);
}
export default Events;
