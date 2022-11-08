import { Link } from "react-router-dom";
import ClubLogo from "../../asset/images/club-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faHouse, faNoteSticky } from "@fortawesome/free-solid-svg-icons";


function Footer() {
    return (
        <footer className="bg-[#ff9617]">
            <div className="flex items-center justify-between border-2 border-green-500 w-2/3 m-auto py-0.5 md:w-full sm:flex-col">
				<div className="logo-space border-2 border-green-500 w-1/3 h-full mb-auto sm:w-full">
					<div className="logo-box w-fit border-2 border-blue m-auto ">
						<img
							className="w-7 h-7 rounded-full m-auto"
							src={ClubLogo}
							alt="OCC Club Logo"
						/>
						<p className="text-sm  w-[200px] border-2 border-green-500 pl-5 pr-0 font-[cursive]">
							<strong>Building community and knowledge through coding. </strong>
						</p>
					</div>
				</div>
				<div className="flex items-start justify-between border-2 border-blue-500 w-2/3 md:min-w-[258px] sm:w-full sm:my-2">
					<ul className="flex flex-col border-2 border-green-500 w-full">
						<li className="footer-link-container-header m-auto">
							<Link to="/homepage" className="footer-link">
								<span className="mr-0.5">
									<FontAwesomeIcon icon={faHouse} />
								</span>
								<span className="footer-title text-lg after:absolute after:w-full after:bg-blue-500 after:origin-bottom-right after:scale-x-0 after:h-[3px] after:bottom-0 after:right-0 after:transition-transform hover:after:scale-x-1 after:mb-[-2px] hover:after:origin-bottom-left">
									<strong>Home</strong>
								</span>
							</Link>
						</li>
						<li className="footer-link-container mx-auto my-0.5 text-stone-600">
							<Link to="/homepage" className="footer-sublink after:absolute after:w-full after:bg-yellow-500 after:origin-bottom-right after:scale-x-0 after:h-[10px] after:bottom-0 after:right-0 after:transition after:transform after:duration-[1s] after:ease-[cubic-bezier(0, 0, 0.44, 1.1)] hover:after:scale-x-1 hover:after:origin-bottom-left">
								<span className="sublink-name text-base">News</span>
							</Link>
						</li>
						<li className="footer-link-container mx-auto my-0.5 text-stone-600">
							<Link to="/homepage">
								<span className="sublink-name text-base">About</span>
							</Link>
						</li>
					</ul>
					<ul className="flex flex-col border-2 border-green-500 w-full">
						<li className="footer-link-container-header m-auto">
							<Link to="" className="footer-link">
								<span className="mr-0.5">
								<FontAwesomeIcon icon={faCalendar} />
								</span>
								<span className="footer-title text-lg">
									<strong>Activity</strong>
								</span>
							</Link>
						</li>
						<li className="footer-link-container mx-auto my-0.5 text-stone-600">
							<Link to="/activity/events" className="footer-sublink">
								<span className="sublink-name text-base">Events</span>
							</Link>
						</li>
						<li className="footer-link-container mx-auto my-0.5 text-stone-600">
							<Link to="/activity/projects" className="footer-sublink">
								<span className="sublink-name text-base">Projects</span>
							</Link>
						</li>
					</ul>
					<ul className="flex flex-col border-2 border-green-500 w-full" id="resources-links">
						<li className="footer-link-container-header m-auto">
							<Link
								to="/resources"
								className="footer-link"
								state={{ option: 1 }}
							>
								<span className="mr-0.5">
								<FontAwesomeIcon icon={faNoteSticky} />
								</span>
								<span className="footer-title text-lg">
									<strong>Resources</strong>
								</span>
							</Link>
						</li>
						<li className="footer-link-container mx-auto my-0.5 text-stone-600">
							<Link
								to="/resources"
								className="footer-sublink"
								state={{ option: 1 }}
							>
								<span className="sublink-name text-base">Tutorials</span>
							</Link>
						</li>
						<li className="footer-link-container mx-auto my-0.5 text-stone-600">
							<Link
								to="/resources"
								className="footer-sublink"
								state={{ option: 2 }}
							>
								<span className="sublink-name text-base">Readings</span>
							</Link>
						</li>
						<li className="footer-link-container mx-auto my-0.5 text-stone-600">
							<Link
								to="/resources"
								className="footer-sublink"
								state={{ option: 3 }}
							>
								<span className="sublink-name text-base">Organizations</span>
							</Link>
						</li>
					</ul>
					
				</div>
				<div className="flex justify-center contact-button border-2 border-green-500 w-1/3 h-fit">
					<Link
						to="/homepage"
						className="border-2 border-yellow-300 whitespace-nowrap text-[20px] w-fit text-yellow-300 p-2.5 tracking-wide hover:text-black hover:bg-yellow-300"
						state={{ section: 3 }}
					>
						CONTACT US
					</Link>
				</div>
			</div>
			<div className="bg-[#ff8d00] py-1.5 text-center md:flex md:flex-col md:items-center">
				<span className="m-auto w-fit border-2 border-green-500 text-sm">
					<strong>&copy; 2022 OCC CS Club</strong>
				</span>
				<span className="m-auto absolute right-0 w-fit border-2 border-green-500 text-sm">Site Map | Privacy Policy</span>
			</div>
		</footer>
       
    )
}

export default Footer;