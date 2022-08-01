import { BookOnline } from "@mui/icons-material";
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./resources.css";
import Tutorials from "./Tutorials.js";
import Research from "./Research";
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
					<h2>Tutorials</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</div>

				<div
					className={
						tabState === 2 ? "resources-content active" : "resources-content"
					}
				>
					<h2>Readings</h2>
					<p>Something about Early Research Scholars Programs.</p>
				</div>

				<div
					className={
						tabState === 3 ? "resources-content active" : "resources-content"
					}
				>
					<h2>Organizations</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
				</div>
			</div>
		</>
	);
}
