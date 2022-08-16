import PropTypes from "prop-types";
import "../events.css";

function EventShort({ title, time, location }) {
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

export default EventShort;

EventShort.propTypes = {
	title: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
};
