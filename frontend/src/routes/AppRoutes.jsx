import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/user/home";
import Navbar from "../components/Navbar";
import Login from "../pages/user/login";
import Register from "../pages/user/register";
import Donate from "../pages/user/donate";
import { Footer } from "../components/Footer";
import Help from "../pages/user/help";
import About from "../pages/user/about";
import FindDonor from "../pages/user/find";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donor/login" element={<Login />} />
        <Route path="/donor/register" element={<Register />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/get-help" element={<Help />} />
        <Route path="/about" element={<About />} />
        <Route path="/find-donor" element={<FindDonor />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;
