import PropTypes from "prop-types";
import { useState } from "react";
import { organizationsMap } from "./fakeData";
import "./resources.css";

// tags is currently unused
function ToggleItem({ id, title, description, url, tags }) {
	const [showButton, setShowButton] = useState(false);

	return (
		<li className="resource-list-item" key={id}>
			<button
				type="button"
				className={`resource-list-title ${showButton && "active"}`}
				onClick={() => setShowButton(prevState => !prevState)}
			>
				{title}
			</button>

			<div className={`resource-list-description ${showButton && "active"}`}>
				<p>{description}</p>
				<a
					className="resource-link"
					href={url}
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn more here. {/* Open link in new tab*/}
				</a>
				<p>Tags: {tags.join(", ")}</p>
			</div>
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

function Organizations() {
	return (
		<ul className="resource-list">
			{organizationsMap.map(org => (
				<ToggleItem
					key={org.id}
					id={org.id}
					title={org.title}
					description={org.description}
					url={org.url}
					tags={org.tags}
				/>
			))}
		</ul>
	);
}

export default Organizations;
