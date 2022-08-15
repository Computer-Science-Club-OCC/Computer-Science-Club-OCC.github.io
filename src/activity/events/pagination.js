import { useState, useEffect } from "react";
import { Box, Pagination } from "@mui/material";
import { eventsMap } from "../fakeData"; // Todo: replace with api service

function EventPagination() {
	const eventsList = eventsMap;
	const defaultPageSize = 5;
	const [pagination, setPagination] = useState({
		count: eventsList.length,
		from: 0,
		to: defaultPageSize,
	});

	//TODO: call api services to get sliced eventsList & pagination attributes

	const handlePageChange = (event, page) => {
		const from = (page - 1) * defaultPageSize;
		const to = (page - 1) * defaultPageSize + defaultPageSize;
		setPagination({ ...pagination, from, to });
	};

	return (
		<Box justifyContent="center" alignItems="center" display="flex">
			<Pagination
				size="large"
				count={Math.ceil(pagination.count / defaultPageSize)}
				onChange={handlePageChange}
				showFirstButton
				showLastButton
				color="primary"
				shape="rounded"
				sx={{ color: "white" }}
			/>
		</Box>
	);
}

export default EventPagination;
