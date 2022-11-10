import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Tutorials from "./Tutorials";
import Readings from "./Readings";
import Organizations from "./Organizations";
import "./resources.css";

function Resources() {
	const topRef = useRef(null);

	const scrollToSection = elementRef => {
		window.scrollTo({
			top: elementRef.current.offsetTop,
			behavior: "smooth",
		});
	};

	const location = useLocation();
	useEffect(() => {
		if (location.state) {
			scrollToSection(topRef)
		}
	}, [location]);
	return (
		<div className="resources-container" ref={topRef}>
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
					tabState === buttonsList.indexOf(tabButton) + 1 ? "active" : ""
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
		<>
			<div className="resources-tabs">{renderButtons(toggleTab, tabState)}</div>
			<div className="resources-contents">
				<div
					className={
						tabState === 1 ? "resources-content active" : "resources-content"
					}
				>
					<Tutorials />
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
		</>
	);
}
