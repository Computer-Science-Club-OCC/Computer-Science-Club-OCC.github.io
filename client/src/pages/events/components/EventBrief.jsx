import PropTypes from "prop-types";
import "../events.css";

function EventBrief({ title, time, location }) {
	return (
		<div className="event-brief">
			<h3 id="title">{title}</h3>
			<div className="timeplace">
				<p>Time: {time}</p>
				<p>Location: {location}</p>
			</div>
		</div>
	);
}

export default EventBrief;

EventBrief.propTypes = {
	title: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
};
