import PropTypes from "prop-types";
import "./event-content.css";
import { EventDetails, EventPosters } from "../events";

function EventExpand({ isExpand, detail, meetingUrl, images }) {
	return (
		<div className="event-expand" id={isExpand ? "expanded" : "collapsed"}>
			<EventDetails detail={detail} meetingUrl={meetingUrl} />
			<EventPosters posterImages={images} />
		</div>
	);
}

EventExpand.propTypes = {
	isExpand: PropTypes.bool.isRequired,
	detail: PropTypes.string.isRequired,
	meetingUrl: PropTypes.string.isRequired,
	images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default EventExpand;
