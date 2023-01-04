import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './Components/Navbar';
import Rocket from './Components/Rocket';
import { fetchRockets } from './redux/rocket/action';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchRockets()).unwrap();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Rocket />} />

      </Routes>
    </div>
  );
}

export default App;
