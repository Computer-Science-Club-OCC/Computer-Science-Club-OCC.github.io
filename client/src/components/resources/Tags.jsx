import PropTypes from "prop-types";
import "./resources.css";

function Tags({ tags }) {
	return (
		<>
			{tags.map(tag => {
				return <p className="tag">{tag}</p>;
			})}
		</>
	);
}

Tags.propTypes = {
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
