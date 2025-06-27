import Home from './Pages/Home/Home';
import './App.css';
import { Routes, Route } from 'react-router';


function App() {
  return (
    <Routes >
      <Route index element={<Home />} />
      
    </Routes>
  );
}

export default App;
