import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

import './App.css';
import Rockets from './Pages/Rockets';
import Missions from './Pages/Missions';
import Dragons from './Pages/Dragons';
import Profile from './Pages/Profile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
