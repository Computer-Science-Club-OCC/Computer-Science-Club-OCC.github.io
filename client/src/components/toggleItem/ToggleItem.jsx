import PropTypes from "prop-types";
import { useState } from "react";

function ToggleItem({
	id,
	title,
	description,
	url,
	urlText,
	children,
	publicationDate,
}) {
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
					{urlText}. {/* Will open link in new tab*/}
				</a>
			</div>
			{publicationDate && <p>Publication date: {publicationDate}</p>}
			<div className="tagsContainer">{children}</div>
		</li>
	);
}

ToggleItem.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	publicationDate: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	urlText: PropTypes.string.isRequired,
	children: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ToggleItem;
