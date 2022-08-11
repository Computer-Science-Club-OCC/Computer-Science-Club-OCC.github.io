import { useState, useEffect } from "react";
import { Pagination } from "@mui/material";
import { eventsMap } from "../fakeData";

function EventPagination() {
	const eventsList = eventsMap;
	const defaultPageSize = 10;
	const [pagination, setPagination] = useState({
		count: 0,
		from: 0,
		to: defaultPageSize,
	});
	const [list, setCurrentList] = useState({});

	useEffect(() => {
		setCurrentList(eventsList.slice(pagination.from, pagination.to));
		setPagination({ ...pagination, count: list.length });
	}, [pagination.from, pagination.to]);

	const handlePageChange = (event, page) => {
		const from = (page - 1) * defaultPageSize;
		const to = (page - 1) * defaultPageSize + defaultPageSize;
		setPagination({ ...pagination, from, to });
	};

	return (
		<Pagination
			size="medium"
			count={Math.ceil(pagination.count / defaultPageSize)}
			onChange={handlePageChange}
			showFirstButton
			showLastButton
		/>
	);
}

export default EventPagination;
