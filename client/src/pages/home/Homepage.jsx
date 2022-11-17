import About from "./components/about/About";
import ContactUs from "./components/contact-us/ContactUs";
import NewsSection from "./components/news-section/NewsSection";
import PropTypes from "prop-types";

function Home({ data }) {
	return (
		<>
			<div>Home</div>
			<About />
			<NewsSection data={data} />
			<ContactUs />
		</>
	);
}

export default Home;


Home.propTypes = {
	data: PropTypes.arrayOf(Object).isRequired,
}

Home.defaultProps = {
	data: [{title: "Lorem Ipsum",
	month: "January",
	day: 1,
	year: 2022,
	description: "Lorem Ipsum",
	links: [
		"https://en.wikipedia.org/wiki/Computer_science",
	],},
	],
}