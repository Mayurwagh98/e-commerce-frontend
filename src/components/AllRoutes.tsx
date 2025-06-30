import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/Auth";
import EcommerceDashboard from "../pages/Dashboard";
import Landing from "../pages/Landing";
import AboutUs from "../pages/About";
import Faqs from "../pages/Faqs";
import ContactUs from "../pages/ContactUs";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import MyProfile from "../pages/MyProfile";
import Products from "../pages/Products";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="dashboard" element={<EcommerceDashboard />} />
        <Route path="my-profile" element={<MyProfile />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
