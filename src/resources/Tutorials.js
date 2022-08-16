import PropTypes from "prop-types";
import { useState } from "react";
import Youtube from "react-youtube";
import "./resources.css";

const fakeData = require("./fakeData");

// tags is currently unused
function ToggleItem({ id, title, description, url, tags }) {
	const [showButton, setShowButton] = useState(false);

	return (
		<li className="resource-list-item" key={id}>
			<button
				type="button"
				className={`resource-list-title ${
					showButton && "resource-list-title-active"
				}`}
				onClick={() => setShowButton(prevState => !prevState)}
			>
				{title}
			</button>

			<li
				className={`resource-list-description ${
					showButton && "resource-list-description-active"
				}`}
			>
				{description}
				{"\n\n"}
				<a
					className="resource-link"
					href={url}
					target="_blank"
					rel="noopener noreferrer"
				>
					Watch the video here. {/* Will open link in new tab*/}
				</a>
				{"\n\n"}
				Tags: {tags.join(", ")}
			</li>
		</li>
	);
}

ToggleItem.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function Tutorials() {
	return (
		<ul className="resource-list">
			{fakeData.tutorialsMap.map(tutorial => (
				<ToggleItem
					key={tutorial.id}
					id={tutorial.id}
					title={tutorial.title}
					description={tutorial.description}
					url={tutorial.url}
					tags={tutorial.tags}
				/>
			))}
		</ul>
	);
}

export default Tutorials;
