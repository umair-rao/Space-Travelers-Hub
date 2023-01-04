import React from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import Rockets from './Pages/Rockets';
import Missions from './Pages/Missions';
import Dragons from './Pages/Dragons';
import Profile from './Pages/Profile';
import Navbar from './Components/Navbar';

import './App.css';

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
