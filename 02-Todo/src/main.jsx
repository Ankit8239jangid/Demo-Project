import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes
import Layout from "./Laout/Layout"
import './index.css';
import App from './App';
import EmployeeDashboard from './Components/employee';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/employee" element={<EmployeeDashboard/>} />

        </Route> 

      </Routes>
    </BrowserRouter>
  </StrictMode>
);
