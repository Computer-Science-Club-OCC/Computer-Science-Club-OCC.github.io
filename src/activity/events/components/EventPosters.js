import PropTypes from "prop-types";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import "../events.css";

function EventPosters({ posterImages }) {
	const images = posterImages;
	return (
		<Gallery>
			<div className="poster-list">
				{images.map(image => {
					return (
						<Item
							original={image}
							thumbnail={image}
							width="1068"
							height="1068"
							alt="poster-img"
						>
							{({ ref, open }) => (
								<input
									className="poster-img"
									type="image"
									ref={ref}
									onClick={open}
									src={image}
									alt="poster"
								/>
							)}
						</Item>
					);
				})}
			</div>
		</Gallery>
	);
}

export default EventPosters;

EventPosters.propTypes = {
	posterImages: PropTypes.arrayOf(PropTypes.string).isRequired,
};
