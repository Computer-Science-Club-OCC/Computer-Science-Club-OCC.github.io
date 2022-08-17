import PropTypes from "prop-types";
import { useState } from "react";
import { readingsMap } from "./fakeData";
import "./resources.css";

// tags is currently unused
function ToggleItem({ id, title, publicationDate, description, url, tags }) {
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
					Read it here. {/* Open link in new tab*/}
				</a>
				<p>
					Publication date: {publicationDate}
					<br />
					Tags: {tags.join(", ")}
				</p>
			</div>
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
			{readingsMap.map(reading => {
				return (
					<ToggleItem
						key={reading.id}
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
