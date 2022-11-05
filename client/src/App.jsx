import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import NavigationBar from "./components/navbar/NavigationBar";
import { ErrorState, LoadingState } from "./components/states";

const Homepage = lazy(() => import("./pages/home/Homepage"));
const Activity = lazy(() => import("./pages/activity/Activity"));
const Events = lazy(() => import("./pages/events/Events"));
const Projects = lazy(() => import("./pages/projects/Projects"));
const Resources = lazy(() => import("./pages/resources/Resources"));
const Login = lazy(() => import("./pages/manager/login/Login"));

function Client() {
	return (
		<>
			<NavigationBar />
			<Routes>
				<Route path="/homepage" element={<Homepage />} />
				<Route path="/activity" element={<Activity />} />
				<Route path="/activity/events" element={<Events />} />
				<Route path="/activity/projects" element={<Projects />} />
				<Route path="/resources" element={<Resources />} />
				<Route path="*" element={<Navigate to="/homepage" replace />} />
			</Routes>
		</>
	);
}

function Admin() {
	return (
		<Routes>
			<Route path="/login" element={<Login />} />
			<Route path="/dashboard" />
		</Routes>
	);
}

function App() {
	return (
		<BrowserRouter>
			<ErrorBoundary FallbackComponent={ErrorState}>
				<Suspense fallback={<LoadingState />}>
					<Routes>
						<Route path="/admin/*" element={<Admin />} />
						<Route path="/*" element={<Client />} />
					</Routes>
				</Suspense>
			</ErrorBoundary>
			{/* Add Footer */}
		</BrowserRouter>
	);
}

export default App;
