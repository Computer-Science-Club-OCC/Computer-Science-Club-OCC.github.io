import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Homepage from './home/Homepage';
import Activity from './activity/Activity';
import Resources from './resources/Resources';
import NavigationBar  from './navbar/NavigationBar';
import HeaderBar from './navbar/HeaderBar';

const App = () => {
	return (
	    <BrowserRouter>
		<HeaderBar />
		<NavigationBar />
		<Routes>
			<Route path='/homepage' element={<Homepage />} />
			<Route path='/activity' element={<Activity />} />
			<Route path='/resources' element={<Resources />} />
			<Route path='*' element={<Navigate to='/homepage' replace />} />
		</Routes>
		</BrowserRouter>
	);
};

export default App;
