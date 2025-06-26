import "./App.css";
import AllRoutes from "./components/AllRoutes";
import { Toaster } from "./components/ui/Toaster";

function App() {
  return (
    <>
      <AllRoutes />
      <Toaster />
    </>
  );
}

export default App;
