import { useState } from "react";
import { tutorialsMap, readingsMap, organizationsMap } from "./fakeData";
import "./resources.css";

function Resources() {
	return (
		<div className="resources-container">
			<Tab />
		</div>
	);
}
export default Resources;

// List of buttons
const buttonsList = ["Tutorials", "Readings", "Organization"];

// Render button
function renderButtons(toggleTab, tabState) {
	return buttonsList.map(tabButton => {
		return (
			<button
				key={buttonsList.indexOf(tabButton) + 1}
				type="button"
				onClick={() => toggleTab(buttonsList.indexOf(tabButton) + 1)}
				className={
					tabState === buttonsList.indexOf(tabButton) + 1 ? "active" : ""
				}
			>
				{tabButton}
			</button>
		);
	});
}

function renderTutorialContents(tabState) {
	const contents = tutorialsMap.map(tutorial => {
		return (
			<li key={tutorial.id}>
				<h3>{tutorial.title}</h3>
				<p>{tutorial.description}</p>
				<video controls muted>
					<source src={tutorial.url} type="video/mp4" alt="text" />
				</video>
				<ul>
					<li>{tutorial.tags}</li>
				</ul>
			</li>
		);
	});
	return (
		<div
			className={
				tabState === 1 ? "resources-content active" : "resources-content"
			}
		>
			{contents}
		</div>
	);
}

function renderReadingsContent(tabState) {
	const contents = readingsMap.map(reading => {
		return (
			<li key={reading.id}>
				<h3>Title: {reading.title}</h3>
				<button type="button">{reading.publicationDate}</button>
				<p>Description: {reading.description}</p>
				<p>
					<a href={reading.url}>Get Content</a>
				</p>
				<ul>
					<li>{reading.tags}</li>
				</ul>
			</li>
		);
	});

	return (
		<div
			className={
				tabState === 2 ? "resources-content active" : "resources-content"
			}
		>
			{contents}
		</div>
	);
}

function renderOrganizationsContent(tabState) {
	const contents = organizationsMap.map(org => {
		return (
			<li key={org.id}>
				<h3>{org.title}</h3>
				<p>{org.description}</p>
				<a type="button" href={org.url}>
					Get Link
				</a>
				<ul>
					<li>{org.tags}</li>
				</ul>
			</li>
		);
	});

	return (
		<div
			className={
				tabState === 3 ? "resources-content active" : "resources-content"
			}
		>
			{contents}
		</div>
	);
}

function Tab() {
	const [tabState, setTab] = useState(1);

	const toggleTab = index => {
		setTab(index);
	};

	return (
		<>
			<div className="resources-tabs">{renderButtons(toggleTab, tabState)}</div>
			<div className="resources-contents">
				{renderTutorialContents(tabState)}
				{renderReadingsContent(tabState)}
				{renderOrganizationsContent(tabState)}
			</div>
		</>
	);
}
