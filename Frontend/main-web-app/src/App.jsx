import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // React Router

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import AddProduct from "./pages/AddProduct";
import QueryForm from "./pages/QueryForm";
import QueryList from "./pages/QueryList";
import IncomeStatement from "./pages/IncomeStatement";
import SalesDashboard from "./pages/SalesDashboard";
import HomePage from "./components/Home-page";
import Navbar from "./components/Nav";
import Repairs from "./pages/Repairs";
const App = () => {
  return (
    <Router>
      <div className="app-container">
        <main>
          <Routes>
            <Route path="/ss" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<p>Page not found</p>} />
            <Route path="/login" element={<Login />} />
            <Route path="/home-page" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/admin/add-product" element={<AddProduct />} />
            <Route path="/income-statements" element={<IncomeStatement />} />
            <Route path="/sales-dashboard" element={<SalesDashboard />} />
            <Route path="/landing-page" element={<HomePage />} />
            <Route path="/nav" element={<Navbar />} />
            <Route path="/query-form" element={<QueryForm />} />
            <Route path="/query-lists" element={<QueryList /> } />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
