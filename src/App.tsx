import Home from './Pages/Home/Home';
import './App.css';
import { Routes, Route } from 'react-router';
import Dashboard from './Pages/Dashboard/Dashboard';
import { useEffect } from 'react';
import { ProductProvider } from './Context/reports';
import { SearchProvider } from './Context/search';


function App() {

  return (
    <SearchProvider>
      <ProductProvider>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </ProductProvider>
    </SearchProvider>
  );
}

export default App;
