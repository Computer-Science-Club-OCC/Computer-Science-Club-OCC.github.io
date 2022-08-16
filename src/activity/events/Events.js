import { useState } from "react";
import EventsHeader from "./components/EventsHeader";
import EventDate from "./components/EventDate";
import EventShort from "./components/EventShort";
import EventDetails from "./components/EventDetails";
import EventPosters from "./components/EventPosters";
import ExpandButton from "./components/ExpandButton";
import { eventsMap as eventsList } from "../fakeData";
import "./events.css";
import EventPagination from "./components/Pagination";

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

	const renderEvents = currentEvents.map(singleEvent => {
		return (
			<div tabIndex={singleEvent.id} role="button" className="event">
				<div className="event-header">
					<EventDate month={singleEvent.month} date={singleEvent.date} />
					<EventShort
						title={singleEvent.title}
						time={singleEvent.time}
						location={singleEvent.location}
					/>
					<ExpandButton
						handleClick={() => handleExpansion(singleEvent.id)}
						isExpanded={isExpanded[singleEvent.id]}
					/>
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
