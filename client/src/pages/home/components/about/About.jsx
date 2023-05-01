import "./about.css";
import Title from "../../../../components/title/title";

function About() {
	// Demo images
	const imageList = [
		"https://loremflickr.com/640/480/nature",
		"https://loremflickr.com/640/480/sports",
		"https://loremflickr.com/640/480/transport",
	];

	return (
		<div className="about-container">
			<Title title="About Us" color="orange" />
			<div className="about-grid">
				<div className="about-item right">
					<div className="about-image">
						<img src={imageList[0]} alt="text" />
					</div>
				</div>
				<div className="about-item">
					<div className="about-text">
						<h1>Who are we</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco
						</p>
					</div>
				</div>
			</div>
			<div className="about-grid">
				<div className="about-item">
					<div className="about-image">
						<img src={imageList[1]} alt="text" />
					</div>
				</div>
				<div className="about-item right">
					<div className="about-text">
						<h1>What we do</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco
						</p>
					</div>
				</div>
			</div>
			<div className="about-grid">
				<div className="about-item right">
					<div className="about-image">
						<img src={imageList[2]} alt="text" />
					</div>
				</div>
				<div className="about-item">
					<div className="about-text">
						<h1>How we meet</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
