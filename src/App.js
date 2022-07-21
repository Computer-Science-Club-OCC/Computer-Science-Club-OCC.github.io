
import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./home/Homepage";
import Activity  from "./activity/Activity";
import Events from './activity/Events';
import Projects from './activity/Projects';
import Resources from "./resources/Resources";
import NavigationBar from "./navbar/NavigationBar";
import "./app.css"


const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/activity/events" element={<Events />} />
          <Route path="/activity/projects" element={<Projects />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<Navigate to="/homepage" replace />} />
        </Routes>
      {/* Add Footer */}
    </BrowserRouter>
  );

};

export default App;
