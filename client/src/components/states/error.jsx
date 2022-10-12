import PropTypes from "prop-types";

function ErrorState({ error, resetErrorBoundary }) {
	return (
		<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
			<div className="m-auto flex flex-col">
				<p className="text-white text-semibold text-xl mb-1">
					Something went wrong:
				</p>
				<pre className="text-slate-50 text-md mb-2">{error.message}</pre>
				<button
					className="bg-occ_color text-white font-semibold rounded-md px-4 py-2 mt-4"
					type="button"
					onClick={resetErrorBoundary}
				>
					Try again
				</button>
			</div>
		</div>
	);
}

export default ErrorState;

ErrorState.propTypes = {
	error: PropTypes.string.isRequired,
	resetErrorBoundary: PropTypes.func.isRequired,
};