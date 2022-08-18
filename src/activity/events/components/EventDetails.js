import PropTypes from "prop-types";
import "../events.css";

function EventDetails({ description, meetingUrl }) {
	return (
		<div className="event-details">
			<p>👨‍🔬 {description}</p>
			<p>🔥 {description}</p>
			<p>☄️ {description}</p>
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

export default EventDetails;

EventDetails.propTypes = {
	description: PropTypes.string.isRequired,
	meetingUrl: PropTypes.string.isRequired,
};
