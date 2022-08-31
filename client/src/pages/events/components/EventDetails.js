import PropTypes from "prop-types";
import "../events.css";

function EventDetails({ detail, meetingUrl }) {
	return (
		<div className="event-details">
			<p>👨‍🔬 {detail}</p>
			<p>🔥 {detail}</p>
			<p>☄️ {detail}</p>
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
	detail: PropTypes.string.isRequired,
	meetingUrl: PropTypes.string.isRequired,
};
