import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Pagination } from "@mui/material";

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
		if (screenSize.dynamicWidth >= 960) {
			setPaginationSize("large");
		}
		if (screenSize.dynamicWidth < 960) {
			setPaginationSize("medium");
		}
		if (screenSize.dynamicWidth < 640) {
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

export default EventPagination;

EventPagination.propTypes = {
	onPageChanged: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
	pageSize: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
};
