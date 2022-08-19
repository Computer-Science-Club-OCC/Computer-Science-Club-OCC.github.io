import PropTypes from "prop-types";
import { Box, Pagination } from "@mui/material";

function EventPagination({ onPageChanged, page, pageSize, total }) {
	return (
		<Box
			justifyContent="center"
			alignItems="center"
			display="flex"
			sx={{ margin: "10px 0px" }}
		>
			<Pagination
				size="large"
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
