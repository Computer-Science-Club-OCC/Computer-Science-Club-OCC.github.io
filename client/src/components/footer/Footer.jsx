import { Link } from "react-router-dom";
import ClubLogo from "../../asset/images/club-logo.png";

function Footer() {
    return (
        <footer className="text-white bg-orange-400">
            <div className="flex items-center m-auto">
				<div className="logo-space">
					<div className="logo-box">
						<img
							className="w-7 h-7 rounded-full"
							src={ClubLogo}
							alt="OCC Club Logo"
						/>
						<p className="text-sm">
							<strong>Building community and knowledge through coding. </strong>
						</p>
					</div>
				</div>
				<div className="flex">
					<ul className="flex flex-col">
						<li className="footer-link-container-header">
							<Link to="/homepage" className="footer-link">
								<span>
									HomeIcon
								</span>
								<span className="footer-title">
									<strong>Home</strong>
								</span>
							</Link>
						</li>
						<li className="footer-link-container">
							<Link to="/homepage" className="footer-sublink">
								<span className="sublink-name">News</span>
							</Link>
						</li>
					</ul>
					<ul className="flex flex-col">
						<li className="footer-link-container-header">
							<Link to="" className="footer-link">
								<span>
									CalendarIcon
								</span>
								<span className="footer-title">
									<strong>Activity</strong>
								</span>
							</Link>
						</li>
						<li className="footer-link-container">
							<Link to="/activity/events" className="footer-sublink">
								<span className="sublink-name">Events</span>
							</Link>
						</li>
						<li className="footer-link-container">
							<Link to="/activity/projects" className="footer-sublink">
								<span className="sublink-name">Projects</span>
							</Link>
						</li>
					</ul>
					<ul className="flex flex-col" id="resources-links">
						<li className="footer-link-container-header">
							<Link
								to="/resources"
								className="footer-link"
								state={{ option: 1 }}
							>
								<span>
									ResourcesIcon
								</span>
								<span className="footer-title">
									<strong>Resources</strong>
								</span>
							</Link>
						</li>
						<li className="footer-link-container">
							<Link
								to="/resources"
								className="footer-sublink"
								state={{ option: 1 }}
							>
								<span className="sublink-name">Tutorials</span>
							</Link>
						</li>
						<li className="footer-link-container">
							<Link
								to="/resources"
								className="footer-sublink"
								state={{ option: 2 }}
							>
								<span className="sublink-name">Readings</span>
							</Link>
						</li>
						<li className="footer-link-container">
							<Link
								to="/resources"
								className="footer-sublink"
								state={{ option: 3 }}
							>
								<span className="sublink-name">Organizations</span>
							</Link>
						</li>
					</ul>
					<ul className="flex flex-col" id="about-box">
						<li className="footer-link-container-header">
							<Link
								to="/homepage"
								className="footer-link"
								state={{ section: 1 }}
							>
								<span>
									AboutIcon
								</span>
								<span className="footer-title">
									<strong>About</strong>
								</span>
							</Link>
						</li>
					</ul>
				</div>
				<div className="contact-button">
					<Link
						to="/homepage"
						className="border-2 border-yellow-300 text-[20px]"
						state={{ section: 3 }}
					>
						CONTACT US
					</Link>
				</div>
			</div>
			<div className="bg-amber-400">
				<p className="text-center w-1/4">
					<strong>&copy; 2022 OCC CS Club</strong>
				</p>
				<p className="text-end w-1/4">Site Map | Privacy Policy</p>
			</div>
		</footer>
       
    )
}

export default Footer;