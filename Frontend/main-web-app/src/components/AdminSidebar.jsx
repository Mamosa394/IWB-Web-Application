import React from "react";
import {
  FaTachometerAlt,
  FaUsers,
  FaBoxOpen,
  FaFileAlt,
  FaCog,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Ensure this is installed and used

const AdminSidebar = ({ collapsed, toggleSidebar }) => {
  return (
    <aside className={`admin-sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <h2 className={collapsed ? "collapsed" : ""}>IWB</h2>
        <FaBars className="toggle-icon" onClick={toggleSidebar} />
      </div>
      <nav className="sidebar-nav">
        <Link to="/dashboard" className="sidebar-link">
          <FaTachometerAlt className="icon" />
          <span className={collapsed ? "collapsed" : ""}>Dashboard</span>
        </Link>
        <Link to="/admin/users" className="sidebar-link">
          <FaUsers className="icon" />
          <span className={collapsed ? "collapsed" : ""}>Users</span>
        </Link>
        <Link to="/admin-inventory" className="sidebar-link">
          <FaBoxOpen className="icon" />
          <span className={collapsed ? "collapsed" : ""}>Products</span>
        </Link>
        <Link to="/income-statements" className="sidebar-link">
          <FaFileAlt className="icon" />
          <span className={collapsed ? "collapsed" : ""}>Reports</span>
        </Link>
        <Link to="/settings" className="sidebar-link">
          <FaCog className="icon" />
          <span className={collapsed ? "collapsed" : ""}>Settings</span>
        </Link>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
