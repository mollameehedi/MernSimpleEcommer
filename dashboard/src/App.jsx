import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import RootLayout from './components/layouts/RootLayout';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />} >
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
        </Route> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App