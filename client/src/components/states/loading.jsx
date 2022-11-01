import PropTypes from "prop-types";

function LoadingState({ message, animateOnly }) {
	const dotCommonClasses = `h-2.5 w-2.5 bg-occ_color rounded-full`;
	return (
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			<div className="m-auto">
				<div className="flex justify-center space-x-3 mb-2">
					<div className={`${dotCommonClasses} mr-1 animate-bounce`} />
					<div className={`${dotCommonClasses} mr-1 animate-bounce200`} />
					<div className={`${dotCommonClasses} animate-bounce400`} />
				</div>
				{animateOnly ? null : (
					<p className="text-center text-lg text-white font-semibold">
						{message}
					</p>
				)}
			</div>
		</div>
	);
}

export default LoadingState;

LoadingState.defaultProps = {
	message: "Loading...",
	animateOnly: false,
};

LoadingState.propTypes = {
	message: PropTypes.string,
	animateOnly: PropTypes.bool,
};
