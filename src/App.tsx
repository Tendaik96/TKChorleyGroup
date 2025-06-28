import Home from './Pages/Home/Home';
import './App.css';
import { Routes, Route } from 'react-router';
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {
  return (
    <Routes >
      <Route index element={<Home />} />
      <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
  );
}

export default App;
