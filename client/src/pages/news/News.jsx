import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "./news.css";

function News({ data }) {
	const { title } = useParams();
	return (
		<section className="main-section w-screen h-screen flex justify-center items-start">
			{data
				.filter(item => item.title === title)
				.map((item, index) => (
					<div key={index} className="center-content">
						<h1 key={index + 1} className="newspage-title h-full w-[50vw] text-white mx-auto mb-[100px] text-center p-2.5 border-b-4 border-orange-400 text-xl box-border">{item.title}</h1>
						<h1 key={index + 2} className="newspage-date text-center text-white h-full w-[50vw] mx-auto mb-[90px] text-lg">{`${item.month} `+ ((item.day >= 1 && item.day < 10) ? `0${item.day}` : `${item.day}`) +`, ${item.year}`}</h1>
						<p key={index + 3} className="news-description h-full w-[50vw] p-[100px] box-border text-white m-auto text-center border-t-4 border-orange-400 border-b-4 news-sm:px-0">{item.description}</p>

						{item.links.length > 0 && (
							<ul key={index + 4} className="links-section border-b-4 border-orange-400 h-full w-[50vw] pb-12 box-border text-white m-auto text-center">
								<h1 key={index + 5}  className="links-title">Links</h1>
								{item.links.map((link, i) => (
									<li key={i} className="link-item p-[10px]">
										<a key={i} href={link} className="link text-orange-400 hover:text-yellow-300">
											{link}
										</a>
									</li>
								))}
							</ul>
						)}
					</div>
				))}
		</section>
	);
}

export default News;


News.propTypes = {
	data: PropTypes.arrayOf(Object).isRequired,
}