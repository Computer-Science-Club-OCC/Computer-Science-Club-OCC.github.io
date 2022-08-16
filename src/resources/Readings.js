import PropTypes from "prop-types";
import { useState } from "react";
import "./resources.css";

const fakeData = require("./fakeData");

// tags is currently unused
function ToggleItem({ id, title, publicationDate, description, url, tags }) {
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
					Read it here. {/* Open link in new tab*/}
				</a>
				{"\n\n"}
				Publication date: {publicationDate}
				{"\n"}
				Tags: {tags.join(", ")}
			</li>
		</li>
	);
}

ToggleItem.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	publicationDate: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function Readings() {
	return (
		<div>
			{fakeData.readingsMap.map(reading => {
				return (
					<ToggleItem
						id={reading.id}
						title={reading.title}
						publicationDate={reading.publicationDate}
						description={reading.description}
						url={reading.url}
						tags={reading.tags}
					/>
				);
			})}
		</div>
	);
}

export default Readings;
