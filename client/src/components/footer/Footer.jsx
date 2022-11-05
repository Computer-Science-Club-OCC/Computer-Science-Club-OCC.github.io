import { Link } from "react-router-dom";
import ClubLogo from "../../asset/images/club-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faHouse } from "@fortawesome/free-solid-svg-icons";


function Footer() {
    return (
        <footer className="text-white bg-orange-400">
            <div className="flex items-center justify-between border-2 border-green-500 w-3/4 m-auto">
				<div className="logo-space  w-[80px]">
					<div className="logo-box w-fit">
						<img
							className="w-7 h-7 rounded-full"
							src={ClubLogo}
							alt="OCC Club Logo"
						/>
						<p className="text-sm  w-1/2">
							<strong>Building community and knowledge through coding. </strong>
						</p>
					</div>
				</div>
				<div className="flex items-center content-baseline justify-between border-blue-500 w-2/3">
					<ul className="flex flex-col border-2 border-green-500">
						<li className="footer-link-container-header">
							<Link to="/homepage" className="footer-link">
								<span>
									<FontAwesomeIcon icon={faHouse} />
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
						<li>
							<Link to="/homepage">
								<span>About</span>
							</Link>
						</li>
					</ul>
					<ul className="flex flex-col border-2 border-green-500">
						<li className="footer-link-container-header">
							<Link to="" className="footer-link">
								<span>
								<FontAwesomeIcon icon={faCalendar} />
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
					<ul className="flex flex-col border-2 border-green-500" id="resources-links">
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
					
				</div>
				<div className="contact-button border-2 border-green-500 w-fit h-fit">
					<Link
						to="/homepage"
						className="border-2 border-yellow-300 text-[20px] min-w-fit text-yellow-300 p-2.5 hover:text-black hover:bg-yellow-300"
						state={{ section: 3 }}
					>
						CONTACT US
					</Link>
				</div>
			</div>
			<div className="bg-amber-400 py-1.5 flex items-center">
				<span className="w-fit border-2 border-green-500">
					<strong>&copy; 2022 OCC CS Club</strong>
				</span>
				{/*<span className="absolute right-0 w-fit border-2 border-green-500">Site Map | Privacy Policy</span>*/}
			</div>
		</footer>
       
    )
}

export default Footer;