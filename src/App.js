// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './teacher-panel/Dashboard';
import ClassroomPage from './teacher-panel/ClassroomPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/classroom/:classroomId" element={<ClassroomPage />} />
      </Routes>
    </Router>
  );
};

export default App;
