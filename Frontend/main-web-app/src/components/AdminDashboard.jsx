import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaUsers,
  FaBoxOpen,
  FaFileAlt,
  FaCog,
  FaBars,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/AdminDashboard.css";

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`admin-dashboard ${collapsed ? "collapsed" : ""}`}>
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2>IWB</h2>
          <FaBars className="toggle-icon" onClick={toggleSidebar} />
        </div>
        <nav>
          <ul>
            <li>
              <FaTachometerAlt className="icon" />
              <span>Dashboard</span>
            </li>
            <li>
              <FaUsers className="icon" />
              <span>Users</span>
            </li>
            <li>
              <FaBoxOpen className="icon" />
              <span>Products</span>
            </li>
            <li>
              <FaFileAlt className="icon" />
              <span>Reports</span>
            </li>
            <li>
              <FaCog className="icon" />
              <span>Settings</span>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Welcome, Admin
          </motion.h1>
        </header>

        <section className="admin-overview">
          <motion.div className="overview-card" whileHover={{ scale: 1.05 }}>
            <h3>Total Users</h3>
            <p>152</p>
          </motion.div>
          <motion.div className="overview-card" whileHover={{ scale: 1.05 }}>
            <h3>Products</h3>
            <p>89</p>
          </motion.div>
          <motion.div className="overview-card" whileHover={{ scale: 1.05 }}>
            <h3>Reports</h3>
            <p>37</p>
          </motion.div>
        </section>

        <section className="admin-activity">
          <h2>Recent Activity</h2>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <li>User Kenneth updated Inventory</li>
            <li>New Partner Application submitted</li>
            <li>Thato added a new Desktop</li>
          </motion.ul>
        </section>

        <div className="admin-section">
          <h2>Admins</h2>
          <div className="admin-cards">
            <motion.div className="admin-card" whileHover={{ scale: 1.05 }}>
              <img src="/images/us/Thabo.jpg" alt="Admin 1" />
              <h4>Thabo Tlou</h4>
              <p>Founder & CTO</p>
            </motion.div>
            <motion.div className="admin-card" whileHover={{ scale: 1.05 }}>
              <img src="/admin1.png" alt="Admin 1" />
              <h4>Thato Chelane</h4>
              <p>Founder & CTO</p>
            </motion.div>

            <motion.div className="admin-card" whileHover={{ scale: 1.05 }}>
              <img src="/admin2.png" alt="Admin 2" />
              <h4>Mamosa Motsie</h4>
              <p>Co-Founder & Operations</p>
            </motion.div>

            <motion.div className="admin-card" whileHover={{ scale: 1.05 }}>
              <img src="/us/Kay.jpg" alt="Admin 3" />
              <h4>Keletso Hato</h4>
              <p>Head of Security</p>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
