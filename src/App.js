import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

import './App.css';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Dragons from './pages/Dragons';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
