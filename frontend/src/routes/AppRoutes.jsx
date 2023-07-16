import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/user/home";
import Navbar from "../components/Navbar";
import Login from "../pages/user/login";
import Register from "../pages/user/register";
import Donate from "../pages/user/donate";
import { Footer } from "../components/Footer";
import Help from "../pages/user/help";
import About from "../pages/user/about";
import FindDonor from "../pages/user/find";
import EventDetails from "../components/EventDetails";
import DonorProfile from "../pages/user/login/Profile";
import VerifyEmail from "../components/VerifyEmail";
import EmailVerificationStatus from "../components/EmailVerificationStatus";
import ForgetPassword from "../components/ForgetPassword";
import ResetPassword from "../components/ResetPassword";

const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donor/login" element={<Login />} />
        <Route path="/donor/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset/:token" element={<ResetPassword />} />
        <Route path="/donor/profile" element={<DonorProfile />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/get-help" element={<Help />} />
        <Route path="/about" element={<About />} />
        <Route path="/find-donor" element={<FindDonor />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/email-verification" element={<VerifyEmail />} />
        <Route path="/email-verification-status/:token" element={<EmailVerificationStatus />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
