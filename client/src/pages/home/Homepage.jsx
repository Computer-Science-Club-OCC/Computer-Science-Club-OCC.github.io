import { useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";
import About from "./components/about/About";
import ContactUs from "./components/contact-us/ContactUs";

function Home() {
	
	return (
		<>
			<div>Home</div>
			<About />
			<ContactUs />
		</>
	);
}

export default Home;
