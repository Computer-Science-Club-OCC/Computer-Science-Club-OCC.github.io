import { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";
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

function ListEvents() {
	const [isCollapse, setCollapse] = useState(false);
	const [index, setIndex] = useState(null);

	function handleClick(id) {
		setCollapse(!isCollapse);
		setIndex(id);
		console.log("Clicked", isCollapse);
		console.log(id);
	}

	const [isLoading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return eventsList.map(singleEvent => {
		return (
			<button
				key={singleEvent.id}
				className="event"
				type="button"
				onClick={() => handleClick(singleEvent.id)}
			>
				<div className="event-date">
					<p id="month">{singleEvent.month}</p>
					<p id="day">{singleEvent.day}</p>
				</div>
				<div className="event-info">
					<h3 id="title">{singleEvent.title}</h3>

					{isCollapse &&
						singleEvent.id === index &&
						(isLoading ? (
							<PacmanLoader
								cssOverride={{
									margin: 10,
								}}
								size={30}
								color="orange"
								loadding={isLoading}
							/>
						) : (
							<div className="event-expand">
								<img src={singleEvent.image} alt="event" />
								<p>Details: </p>
								<p>{singleEvent.description}</p>
							</div>
						))}

					<p id="important">Time: {singleEvent.time}</p>
					<p id="important">Location: {singleEvent.location}</p>
				</div>
			</button>
		);
	});
}
