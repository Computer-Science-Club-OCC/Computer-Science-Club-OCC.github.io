import React from "react";

import "./homepage.css";
import ClubLogo from "../asset/images/club-logo.png";

function Home() {
	return (
		<div className="home-container">
			<div className="home-left_side">
				<img className="home-club_logo" src={ClubLogo} alt="club-logo" />
				<button className="home-button" type="button" onClick={() => {}}>
					Button
				</button>
			</div>

			<div className="home-right_side">
				<h1>
					<span className="home-hero_text">
						Computer <br /> Science
					</span>
					<br /> @<span className="home-occ_text">OCC</span>
				</h1>
				<h3>
					&quot;The club is what
					<br /> you make it to be&quot;
					<br /> - Professor Jang
				</h3>
			</div>
		</div>
	);
}

export default Home;
