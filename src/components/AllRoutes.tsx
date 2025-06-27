import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/Auth";
import EcommerceDashboard from "../pages/Dashboard";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="auth" element={<AuthPage />} />
        <Route path="dashboard" element={<EcommerceDashboard />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
