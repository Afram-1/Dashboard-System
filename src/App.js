import "./App.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Router
import { Routes, Route } from "react-router-dom";

// Pages
import DashboardLayout from "./Components/Layout";
import User from "./Pages/User";
import Products from "./Pages/Products";
import Settings from "./Pages/Settings";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DashboardLayout />} />
        <Route path="user" element={<User />} />
        <Route path="products" element={<Products />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
