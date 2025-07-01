import "./App.css";
import AllRoutes from "./components/AllRoutes";
import Sidebar from "./components/Sidebar/app-sidebar";

import { Toaster } from "./components/ui/Toaster";

function App() {
  return (
    <>
      <Sidebar />
      <AllRoutes />
      <Toaster />
    </>
  );
}

export default App;
