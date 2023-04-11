import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
// import Tutorials from "./Tutorials";
import Tutorial from "../../components/resources/tutorials";
import Readings from "./Readings";
import Organizations from "./Organizations";
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
const buttonsList = ["Tutorials", "Readings", "Organizations"];

function renderButtons(toggleTab, tabState) {
	return buttonsList.map(tabButton => {
		return (
			<button
				key={buttonsList.indexOf(tabButton) + 1}
				type="button"
				onClick={() => toggleTab(buttonsList.indexOf(tabButton) + 1)}
				className={
					tabState === buttonsList.indexOf(tabButton) + 1
						? "active rounded-md"
						: "rounded-md"
				}
			>
				{tabButton}
			</button>
		);
	});
}

function Tab() {
	const [tabState, setTab] = useState(1);

	const toggleTab = index => {
		setTab(index);
	};

	const location = useLocation();
	useEffect(() => {
		toggleTab(location.state.option);
	}, [location]);

	return (
		<div className="flex justify-center items-center flex-col">
			<div className="resources-tabs rounded-xl w-2/3">
				{renderButtons(toggleTab, tabState)}
			</div>
			<div className="resources-contents">
				<div
					className={
						tabState === 1 ? "resources-content active" : "resources-content"
					}
				>
					<Tutorial />
				</div>
				<div
					className={
						tabState === 2 ? "resources-content active" : "resources-content"
					}
				>
					<Readings />
				</div>
				<div
					className={
						tabState === 3 ? "resources-content active" : "resources-content"
					}
				>
					<Organizations />
				</div>
			</div>
		</div>
	);
}
