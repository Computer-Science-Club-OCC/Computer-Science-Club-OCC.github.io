import { useState } from "react";
import "./activity.css";

function Activity() {
	return (
		<div className="activity-container">
			<h1 className="activity-title">Activity</h1>
			<Tab className="tab-components" />
		</div>
	);
}

export default Activity;

function Tab() {
	const [tabState, setTab] = useState(1);

	const toggleTab = index => {
		setTab(index);
	};

	return (
		<div className="tab-container">
			<div className="tabs">
				<button
					type="button"
					onClick={() => toggleTab(1)}
					className={tabState === 1 ? "tab-button active" : "tab-button"}
				>
					Events
				</button>
				<button
					type="button"
					onClick={() => toggleTab(2)}
					className={tabState === 2 ? "tab-button active" : "tab-button"}
				>
					Projects
				</button>
			</div>
			<div className="tab-contents">
				<div
					className={
						tabState === 1 ? "tab-content active-content" : "tab-content"
					}
				>
					<h2>Title 1</h2>
					<img src="#" alt="temp" />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</div>
				<div
					className={
						tabState === 2 ? "tab-content active-content" : "tab-content"
					}
				>
					<h2>Title 2</h2>
					<img src="#" alt="temp" />

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
		</div>
	);
}
