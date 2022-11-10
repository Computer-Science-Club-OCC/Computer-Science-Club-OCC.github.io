import { useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";
import About from "./components/about/About";
import ContactUs from "./components/contact-us/ContactUs";

function Home() {
	const aboutRef = useRef(null);
	const contactUsRef = useRef(null);

	const scrollToSection = elementRef => {
		window.scrollTo({
			top: elementRef.current.offsetTop,
			behavior: "smooth",
		});
	};

	const location = useLocation();
	useEffect(() => {
		if (location.state) {
			if (location.state.section === 1) {
				scrollToSection(aboutRef);
			} else if (location.state.section === 3) {
				scrollToSection(contactUsRef);
			}
		}
	}, [location]);
	return (
		<>
			<div>Home</div>
			<div ref={aboutRef} className="about-container">
				<About />
			</div>
			<div ref={contactUsRef} className="contact-us-container">
				<ContactUs />
			</div>
		</>
	);
}

export default Home;
