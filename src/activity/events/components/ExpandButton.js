import PropTypes from "prop-types";
import { IconButton, Tooltip } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

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
					<KeyboardArrowDown
						className="expand-icon"
						fontSize="large"
						id={isExpanded ? "open" : "closed"}
					/>
				</IconButton>
			</Tooltip>
		</div>
	);
}

export default ExpandButton;

ExpandButton.propTypes = {
	handleClick: PropTypes.func.isRequired,
	isExpanded: PropTypes.bool.isRequired,
};
