import PropTypes from "prop-types";
import "../events.css";

function EventDate({ month, date }) {
	return (
		<div className="event-date">
			<p id="month">{month}</p>
			<p id="day">{date}</p>
		</div>
	);
}

export default EventDate;

EventDate.propTypes = {
	month: PropTypes.number.isRequired,
	date: PropTypes.number.isRequired,
};
