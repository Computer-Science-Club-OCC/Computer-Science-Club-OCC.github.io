import PropTypes from "prop-types";
import Carousel from "./carousel/Carousel";



function NewsSection({ data }) {
	return (
		<div className="news-section-container mt-[70px]">
			{data.length === 0 && <h1 className="no-news-title text-center text-5xl text-white">No News</h1>}
			{data.length > 0 && <h1 className="news-title m-auto max-w-[920px] w-[80%] underline text-5xl text-white news-md:w-[90%]"><span className="ml-[2rem] news-md:m-[.9rem] news-sec-sm:m-0">Latest News</span></h1>}
			{data.length > 0 && (
				<div className="carousel-container flex justify-center my-[20px] bg-black">
					<Carousel data={data} />
				</div>
			)}
		</div>
	);
}

export default NewsSection;

NewsSection.propTypes = {
	data: PropTypes.arrayOf(Object).isRequired,
}