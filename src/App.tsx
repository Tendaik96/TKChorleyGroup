import Home from './Pages/Home/Home';
import './App.css';
import { Routes, Route } from 'react-router';
import Dashboard from './Pages/Dashboard/Dashboard';
import { useEffect } from 'react';
import { ProductProvider } from './Context/reports';


function App() {

  return (
    <ProductProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </ProductProvider>
  );
}

export default App;
