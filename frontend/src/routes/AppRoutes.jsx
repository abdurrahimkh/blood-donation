import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/user/home";
import Login from "../pages/user/login";
import Register from "../pages/user/register";
import Donate from "../pages/user/donate";
import Help from "../pages/user/help";
import About from "../pages/user/about";
import FindDonor from "../pages/user/find";
import EventDetails from "../components/EventDetails";
import DonorProfile from "../pages/user/login/Profile";
import VerifyEmail from "../components/VerifyEmail";
import EmailVerificationStatus from "../components/EmailVerificationStatus";
import ForgetPassword from "../components/ForgetPassword";
import ResetPassword from "../components/ResetPassword";
import AdminLogin from "../pages/admin/login";
import AdminLayout from "../pages/admin/pages/AdminLayout";
import Layout from "./Layout";
import Donors from '../pages/admin/pages/Donors'
import BloodGroups from '../pages/admin/pages/BloodGroups'
import BloodRequests from '../pages/admin/pages/BloodRequests'
import DonorSub from '../pages/admin/pages/DonorSub'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/donor/login" element={<Layout><Login /></Layout>} />
        <Route path="/donor/register" element={<Layout><Register /></Layout>} />
        <Route path="/forget-password" element={<Layout><ForgetPassword /></Layout>} />
        <Route path="/reset/:token" element={<Layout><ResetPassword /></Layout>} />
        <Route path="/donor/profile" element={<Layout><DonorProfile /></Layout>} />
        <Route path="/donate" element={<Layout><Donate /></Layout>} />
        <Route path="/get-help" element={<Layout><Help /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/find-donor" element={<Layout><FindDonor /></Layout>} />
        <Route path="/events/:id" element={<Layout><EventDetails /></Layout>} />
        <Route path="/email-verification" element={<Layout><VerifyEmail /></Layout>} />
        <Route path="/email-verification-status/:token" element={<Layout><EmailVerificationStatus /></Layout>} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/donors" element={<AdminLayout><Donors/></AdminLayout>} />
        <Route path="/admin/blood-group" element={<AdminLayout><BloodGroups/></AdminLayout>} />
        <Route path="/admin/donor-requests" element={<AdminLayout><DonorSub/></AdminLayout>} />
        <Route path="/admin/patient-requests" element={<AdminLayout><BloodRequests/></AdminLayout>} />
      </Routes>
    </>
  );
};

export default AppRoutes;
