import { useState, useCallback, useEffect } from "react";
import EventsHeader from "./components/EventsHeader";
import EventDate from "./components/EventDate";
import EventBrief from "./components/EventBrief";
import EventDetails from "./components/EventDetails";
import EventPosters from "./components/EventPosters";
import ExpandButton from "./components/ExpandButton";
import EventPagination from "./components/EventPagination";
import eventsMap from "./fakeDataEvent"; // Todo: Replace with api service
import "./events.css";

const DEFAULT_PAGE = 1; // Todo: Move to config file
const DEFAULT_PAGE_SIZE = 5; // Todo: Move to config file

// Render List
function Events() {
	const [isExpanded, setExpand] = useState({});
	const [eventsList, setEventsList] = useState([]);
	const [page, setPage] = useState(DEFAULT_PAGE);

	function handleExpansion(id) {
		setExpand(prevExpanded => ({
			...prevExpanded,
			[id]: !prevExpanded[id],
		}));
	}

	useEffect(() => {
		const paginatedEvents = eventsMap.slice(
			(page - 1) * DEFAULT_PAGE_SIZE,
			page * DEFAULT_PAGE_SIZE,
		);
		setEventsList(paginatedEvents);
	}, [page]);

	const onPageChanged = useCallback(
		(event, page) => {
			event.preventDefault();
			setPage(page);
		},
		[setPage],
	);

	const renderEvents = eventsList.map(event => {
		return (
			<div
				key={event.id.toString()}
				tabIndex={event.id}
				role="button"
				className="event"
			>
				<div className="event-header">
					<EventDate month={event.month} date={event.date} />
					<EventBrief
						title={event.title}
						time={event.time}
						location={event.location}
					/>
					<ExpandButton
						handleClick={() => handleExpansion(event.id)}
						isExpanded={isExpanded[event.id] ?? false}
					/>
				</div>
				<div
					className="event-expand"
					id={isExpanded[event.id] ? "expanded" : "collapsed"}
				>
					<EventDetails detail={event.detail} meetingUrl={event.meetingUrl} />
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
					onPageChanged={onPageChanged}
					page={page}
					pageSize={DEFAULT_PAGE_SIZE}
					total={eventsMap.length}
				/>
				{renderEvents}
				<EventPagination
					onPageChanged={onPageChanged}
					page={page}
					pageSize={DEFAULT_PAGE_SIZE}
					total={eventsMap.length}
				/>
			</div>
		</div>
	);
}
export default Events;
