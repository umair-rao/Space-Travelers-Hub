import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import Rockets from './Pages/Rockets';
import Missions from './Pages/Missions';
import Dragons from './Pages/Dragons';
import Profile from './Pages/Profile';
import Navbar from './Components/Navbar';
import { fetchRockets } from './Redux/Rockets/Rockets';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchRockets()).unwrap();
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
