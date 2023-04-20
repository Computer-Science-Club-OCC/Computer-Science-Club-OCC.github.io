import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Pagination, IconButton, Tooltip } from "@mui/material"; // replace with tailwind
import { Gallery, Item } from "react-photoswipe-gallery";
import { ChevronDown } from "../../asset/icons/icons";
import Title from "../title/title";
import "photoswipe/dist/photoswipe.css";
import "./events.css";

function EventBrief({ title, time, location }) {
	return (
		<div className="event-brief">
			<h3 id="title">{title}</h3>
			<div className="timeplace">
				<p>Time: {time}</p>
				<p>Location: {location}</p>
			</div>
		</div>
	);
}

EventBrief.propTypes = {
	title: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
};

function EventDate({ month, date }) {
	return (
		<div className="event-date">
			<p id="month">{month}</p>
			<p id="day">{date}</p>
		</div>
	);
}

EventDate.propTypes = {
	month: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
};

function EventDetails({ detail, meetingUrl }) {
	return (
		<div className="event-details">
			<p>👨‍🔬 {detail}</p>
			<p>🔥 {detail}</p>
			<p>☄️ {detail}</p>
			<p>
				👉 Zoom link:
				<a id="meeting-link" href={meetingUrl}>
					{meetingUrl}
				</a>
			</p>
			<p>🥳🥳🥳 Check out our posters!!!</p>
		</div>
	);
}

EventDetails.propTypes = {
	detail: PropTypes.string.isRequired,
	meetingUrl: PropTypes.string.isRequired,
};

function EventPosters({ posterImages }) {
	const images = posterImages;
	return (
		<Gallery>
			<div className="poster-list">
				{images.map(image => {
					return (
						<Item
							key={image.id}
							original={image.img}
							thumbnail={image.img}
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
									src={image.img}
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

EventPosters.propTypes = {
	posterImages: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			img: PropTypes.string,
		}),
	).isRequired,
};

function EventsHeader() {
	return (
		<div className="events-header">
			<Title title="Events" color="blue" />
		</div>
	);
}

// TODO: Replace mui tooltip with tailwind
function ExpandButton({ handleClick, isExpanded }) {
	return (
		<div className="expand-button">
			<Tooltip
				title={!isExpanded ? "expand" : "collapse"}
				fontSize="large"
				placement="top"
				sx={{ fontSize: "16px" }}
				arrow
			>
				<IconButton type="button" onClick={handleClick}>
					<ChevronDown
						className="expand-icon"
						id={isExpanded ? "open" : "closed"}
					/>
				</IconButton>
			</Tooltip>
		</div>
	);
}

ExpandButton.propTypes = {
	handleClick: PropTypes.func.isRequired,
	isExpanded: PropTypes.bool.isRequired,
};

// TODO: Once finish restyling, remove Event pagination
function EventPagination({ onPageChanged, page, pageSize, total }) {
	const [paginationSize, setPaginationSize] = useState("large");
	const [screenSize, getDimension] = useState({
		dynamicWidth: window.innerWidth,
	});

	const setDimension = () => {
		getDimension({
			dynamicWidth: window.innerWidth,
		});
	};

	useEffect(() => {
		window.addEventListener("resize", setDimension);
		if (screenSize.dynamicWidth > 960) {
			setPaginationSize("large");
		} else if (screenSize.dynamicWidth > 640) {
			setPaginationSize("medium");
		} else {
			setPaginationSize("small");
		}
		return () => {
			window.removeEventListener("resize", setDimension);
		};
	}, [screenSize]);

	return (
		<Box className="pagination-box">
			<Pagination
				size={paginationSize}
				count={Math.ceil(total / pageSize)}
				page={page}
				onChange={onPageChanged}
				siblingCount={2}
				showFirstButton
				showLastButton
				color="primary"
				shape="rounded"
				sx={{
					".MuiPaginationItem-root": {
						color: "#fff",
					},
				}}
			/>
		</Box>
	);
}

EventPagination.propTypes = {
	onPageChanged: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
	pageSize: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
};

export {
	EventBrief,
	EventDate,
	EventDetails,
	EventPosters,
	EventPagination,
	EventsHeader,
	ExpandButton,
};
