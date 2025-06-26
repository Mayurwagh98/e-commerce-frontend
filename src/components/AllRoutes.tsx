import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/Auth";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="auth" element={<AuthPage />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
