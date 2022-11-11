import About from "./components/about/About";
import ContactUs from "./components/contact-us/ContactUs";
import NewsSection from "./components/news-section/NewsSection";

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
