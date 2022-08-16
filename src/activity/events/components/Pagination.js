import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box, Pagination } from "@mui/material";
import { eventsMap } from "../../fakeData"; // Todo: Replace with api service

function EventPagination({ setEvents, setPage, page }) {
	const DEFAULT_PAGE = 1; // Todo: Move to config file
	const DEFAULT_PAGE_SIZE = 5; // Todo: Move to config file
	const [pagination, setPagination] = useState({
		count: eventsMap.length,
		page: DEFAULT_PAGE,
		from: 0,
		to: DEFAULT_PAGE_SIZE,
	});

	// TODO: call api services to retrieve paginated events list
	useEffect(() => {
		const currentEvents = eventsMap.slice(pagination.from, pagination.to);
		setEvents(currentEvents);
		setPage(pagination.page);
	}, [pagination.from, pagination.to, pagination.page]);

	const handlePageChange = (event, page) => {
		const from = (page - 1) * DEFAULT_PAGE_SIZE;
		const to = page * DEFAULT_PAGE_SIZE;
		setPagination({ ...pagination, from, to, page });
	};

	return (
		<Box
			justifyContent="center"
			alignItems="center"
			display="flex"
			sx={{ margin: "10px 0px" }}
		>
			<Pagination
				size="large"
				count={Math.ceil(pagination.count / DEFAULT_PAGE_SIZE)}
				page={page}
				onChange={handlePageChange}
				showFirstButton
				showLastButton
				color="primary"
				shape="rounded"
			/>
		</Box>
	);
}

export default EventPagination;

EventPagination.propTypes = {
	setEvents: PropTypes.func.isRequired,
	setPage: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
};
