import { BookOnline } from "@mui/icons-material";
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./resources.css";
import Tutorials from "./Tutorials";
import Readings from "./Readings";
import Organizations from "./Organizations";

function Resources() {
	return (
		<div className="resources-container">
			<Tab />
		</div>
	);
}
export default Resources;

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
			<div className="resources-tabs">
				<button
					type="button"
					onClick={() => toggleTab(1)}
					className={tabState === 1 ? "active" : ""}
				>
					Tutorials
				</button>
				<button
					type="button"
					onClick={() => toggleTab(2)}
					className={tabState === 2 ? "active" : ""}
				>
					Readings
				</button>
				<button
					type="button"
					onClick={() => toggleTab(3)}
					className={tabState === 3 ? "active" : ""}
				>
					Organizations
				</button>
			</div>

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
