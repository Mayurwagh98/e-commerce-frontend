import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/Auth";
import EcommerceDashboard from "../pages/Dashboard";
import Landing from "../pages/Landing";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="dashboard" element={<EcommerceDashboard />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
