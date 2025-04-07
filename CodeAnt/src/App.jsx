import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login_Page/LoginCard";
import Dashboard from "./components/pages/Dashboard/Dashboard";

const App = () => {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/repositories" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
