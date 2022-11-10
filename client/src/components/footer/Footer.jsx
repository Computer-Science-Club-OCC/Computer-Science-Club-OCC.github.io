import { Link } from "react-router-dom";
import ClubLogo from "../../asset/images/club-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faHouse, faNoteSticky } from "@fortawesome/free-solid-svg-icons";


function Footer() {
    return (
        <footer className="bg-[#ff9617]">
            <div className="flex items-center justify-between w-[910px] m-auto py-2 footer-md:w-full footer-sm:flex-col">
				<div className="logo-space w-3/12 h-full mb-auto footer-sm:w-full ">
					<div className="logo-box w-fit m-auto">
						<img
							className="w-7 h-7 rounded-full m-auto"
							src={ClubLogo}
							alt="OCC Club Logo"
						/>
						<p className="text-sm  w-[200px] pl-5 pr-0 pt-1.5 font-[cursive]">
							<strong>Building community and knowledge through coding. </strong>
						</p>
					</div>
				</div>
				<div className="flex items-start justify-between w-3/5 footer-md:min-w-[258px] footer-sm:w-full footer-sm:my-2 footer-sm:py-2.5 footer-tiny:flex-col">
					<ul className="flex flex-col w-full">
						<li className="footer-link-container-header m-auto">
							<Link to="/homepage" className="footer-link">
								<span className="mr-0.5">
									<FontAwesomeIcon className="scale-110 mb-[3px]" icon={faHouse} />
								</span>
								<span className="footer-title relative inline-block no-underline text-lg after:absolute after:w-0 after:h-[2px] after:block after:bg-yellow-300 after:right-0 after:transition-[width] after:ease-in-out after:duration-[.5s] hover:after:w-full hover:after:left-0 hover:after:bg-yellow-300">
									<strong>Home</strong>
								</span>
							</Link>
						</li>
						<li className="footer-link-container mx-auto my-0.5 text-stone-600">
							<Link to="/homepage" className="footer-sublink relative inline-block no-underline text-lg after:absolute after:w-0 after:h-[2px] after:block after:bg-yellow-300 after:right-0 after:transition-[width] after:ease-in-out after:duration-[.5s] hover:after:w-full hover:after:left-0 hover:after:bg-yellow-300">
								<span className="sublink-name text-base">About</span>
							</Link>
						</li>
						<li className="footer-link-container mx-auto my-0.5 text-stone-600">
							<Link to="/homepage" className="footer-sublink relative inline-block no-underline text-lg after:absolute after:w-0 after:h-[2px] after:block after:bg-yellow-300 after:right-0 after:transition-[width] after:ease-in-out after:duration-[.5s] hover:after:w-full hover:after:left-0 hover:after:bg-yellow-300">
								<span className="sublink-name text-base">News</span>
							</Link>
						</li>
					</ul>
					<ul className="flex flex-col w-full">
						<li className="footer-link-container-header m-auto">
							<Link to="/activity" className="footer-link">
								<span className="mr-0.5">
								<FontAwesomeIcon className="scale-110 mb-[3px]" icon={faCalendar} />
								</span>
								<span className="footer-title text-lg relative inline-block no-underline text-lg after:absolute after:w-0 after:h-[2px] after:block after:bg-yellow-300 after:right-0 after:transition-[width] after:ease-in-out after:duration-[.5s] hover:after:w-full hover:after:left-0 hover:after:bg-yellow-300">
									<strong>Activity</strong>
								</span>
							</Link>
						</li>
						<li className="footer-link-container mx-auto my-0.5 text-stone-600">
							<Link to="/activity/events" className="footer-sublink relative inline-block no-underline text-lg after:absolute after:w-0 after:h-[2px] after:block after:bg-yellow-300 after:right-0 after:transition-[width] after:ease-in-out after:duration-[.5s] hover:after:w-full hover:after:left-0 hover:after:bg-yellow-300">
								<span className="sublink-name text-base">Events</span>
							</Link>
						</li>
						<li className="footer-link-container mx-auto my-0.5 text-stone-600">
							<Link to="/activity/projects" className="footer-sublink relative inline-block no-underline text-lg after:absolute after:w-0 after:h-[2px] after:block after:bg-yellow-300 after:right-0 after:transition-[width] after:ease-in-out after:duration-[.5s] hover:after:w-full hover:after:left-0 hover:after:bg-yellow-300">
								<span className="sublink-name text-base">Projects</span>
							</Link>
						</li>
					</ul>
					<ul className="flex flex-col w-full min-w-[125px]" id="resources-links">
						<li className="footer-link-container-header m-auto">
							<Link
								to="/resources"
								className="footer-link"
								state={{ option: 1 }}
							>
								<span className="mr-0.5">
								<FontAwesomeIcon className="scale-110 mb-[2px]" icon={faNoteSticky} />
								</span>
								<span className="footer-title text-lg no-underline text-lg relative after:absolute after:w-0 after:h-[2px] after:block after:bg-yellow-300 after:right-0 after:transition-[width] after:ease-in-out after:duration-[.5s] hover:after:w-full hover:after:left-0 hover:after:bg-yellow-300">
									<strong>Resources</strong>
								</span>
							</Link>
						</li>
						<li className="footer-link-container mx-auto my-0.5 text-stone-600">
							<Link
								to="/resources"
								className="footer-sublink relative inline-block no-underline text-lg after:absolute after:w-0 after:h-[2px] after:block after:bg-yellow-300 after:right-0 after:transition-[width] after:ease-in-out after:duration-[.5s] hover:after:w-full hover:after:left-0 hover:after:bg-yellow-300"
								state={{ option: 1 }}
							>
								<span className="sublink-name text-base">Tutorials</span>
							</Link>
						</li>
						<li className="footer-link-container mx-auto my-0.5 text-stone-600">
							<Link
								to="/resources"
								className="footer-sublink relative inline-block no-underline text-lg after:absolute after:w-0 after:h-[2px] after:block after:bg-yellow-300 after:right-0 after:transition-[width] after:ease-in-out after:duration-[.5s] hover:after:w-full hover:after:left-0 hover:after:bg-yellow-300"
								state={{ option: 2 }}
							>
								<span className="sublink-name text-base">Readings</span>
							</Link>
						</li>
						<li className="footer-link-container mx-auto my-0.5 text-stone-600">
							<Link
								to="/resources"
								className="footer-sublink relative inline-block no-underline text-lg after:absolute after:w-0 after:h-[2px] after:block after:bg-yellow-300 after:right-0 after:transition-[width] after:ease-in-out after:duration-[.5s] hover:after:w-full hover:after:left-0 hover:after:bg-yellow-300"
								state={{ option: 3 }}
							>
								<span className="sublink-name text-base">Organizations</span>
							</Link>
						</li>
					</ul>
					
				</div>
				<div className="flex justify-center contact-button w-3/12 h-fit">
					<Link
						to="/homepage"
						className="border-2 border-yellow-300 whitespace-nowrap text-[20px] w-fit text-yellow-300 p-2.5 tracking-wide hover:text-black hover:bg-yellow-300"
						state={{ section: 3 }}
					>
						CONTACT US
					</Link>
				</div>
			</div>
			<div className="bg-[#ff8d00] py-1.5 text-center footer-md:flex footer-md:flex-col footer-md:items-center footer-b-sm:flex footer-b-sm:flex-col">
				<span className="m-auto w-fit text-sm footer-b-sm:relative">
					<strong>&copy; 2022 OCC CS Club</strong>
				</span>
				<span className="m-auto absolute right-[5px] w-fit text-sm footer-b-sm:relative">Site Map | Privacy Policy</span>
			</div>
		</footer>
       
    )
}

export default Footer;