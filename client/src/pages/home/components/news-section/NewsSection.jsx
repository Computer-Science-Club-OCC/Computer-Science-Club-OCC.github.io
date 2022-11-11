import PropTypes from "prop-types";
import Carousel from "./carousel/Carousel";
import "./newssection.css";


function NewsSection({ data }) {
	return (
		<div className="news-section-container">
			{data.length === 0 && <h1 className="no-news-title">No News</h1>}
			{data.length > 0 && <h1 className="news-title">Latest News</h1>}
			{data.length > 0 && (
				<div className="carousel-container">
					<Carousel data={data} />
				</div>
			)}
		</div>
	);
}

export default NewsSection;

NewsSection.propTypes = {
	data: PropTypes.arrayOf(Object),
}