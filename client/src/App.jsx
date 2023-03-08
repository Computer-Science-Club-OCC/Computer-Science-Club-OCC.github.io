import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import NavigationBar from "./components/navbar/NavigationBar";
import data from "./utils/NewsData";

import { ErrorState, LoadingState } from "./components/states";

const Homepage = lazy(() => import("./pages/home/Homepage"));
const Events = lazy(() => import("./pages/events/Events"));
const Projects = lazy(() => import("./pages/projects/Projects"));
const Resources = lazy(() => import("./pages/resources/Resources"));
const News = lazy(() => import("./pages/news/News"))

function App() {
	return (
		<BrowserRouter>
			<NavigationBar />
			<ErrorBoundary FallbackComponent={ErrorState}>
				<Suspense fallback={<LoadingState />}>
					<Routes>
						<Route path="/homepage" element={<Homepage />} />
						<Route path="/events" element={<Events />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/resources" element={<Resources />} />
						<Route path="/news/:year/:title" element={<News data={data} />} />
						<Route path="*" element={<Navigate to="/homepage" replace />} />
					</Routes>
				</Suspense>
			</ErrorBoundary>
			{/* Add Footer */}
		</BrowserRouter>
	);
}

export default App;
