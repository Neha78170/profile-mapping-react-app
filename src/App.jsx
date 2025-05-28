import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AdminPanel from "./Pages/AdminPanel"; 
import Navbar from "./Components/Navbar";
import ProfileDetail from "./Pages/ProfileDetail" ;


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Router>
         <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPanel />} />
            <Route path="/profile/:id" element={<ProfileDetail />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
