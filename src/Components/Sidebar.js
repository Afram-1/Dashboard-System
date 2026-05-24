import React from "react";
import { Link, useLocation } from "react-router-dom";

// MUI
import Avatar from "@mui/material/Avatar";
import { deepPurple } from "@mui/material/colors";

// Lucide Icons
import { Indent, Users, PackageSearch, Settings } from "lucide-react";

const pageLinks = [
  { path: "/", label: "Dashboard", icon: <Indent size={18} /> },
  { path: "/user", label: "Users", icon: <Users size={18} /> },
  { path: "/products", label: "Products", icon: <PackageSearch size={18} /> },
  { path: "/settings", label: "Settings", icon: <Settings size={18} /> },
];

const SidebarLinks = ({ onClick }) => {
  const location = useLocation();

  return (
    <>
      {pageLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          onClick={onClick}
          className={`sidebar-item d-flex align-items-center gap-2 p-3 rounded text-decoration-none
          ${
            location.pathname === link.path
              ? "bg-primary bg-opacity-10 text-primary"
              : "text-dark"
          }`}
        >
          {link.icon}
          <span>{link.label}</span>
        </Link>
      ))}
    </>
  );
};

const Sidebar = () => {
  return (
    <>
      {/* ===== Desktop Sidebar ===== */}
      <aside
        className="d-none d-md-flex flex-column bg-white border-end"
        style={{ width: "240px", minHeight: "100vh" }}
      >
        <div className="p-3 d-flex align-items-center">
          <Avatar sx={{ bgcolor: deepPurple[500], borderRadius: "12px" }} />
          <h5 className="ms-3 m-0">Admin</h5>
        </div>

        <hr className="m-0" />

        <div className="p-2">
          <SidebarLinks />
        </div>
      </aside>

      {/* ===== Mobile Sidebar (Offcanvas) ===== */}
      <div
        className="offcanvas offcanvas-start d-md-none"
        tabIndex="-1"
        id="mobileSidebar"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Admin</h5>
          <button className="btn-close" data-bs-dismiss="offcanvas" />
        </div>

        <div className="offcanvas-body">
          <SidebarLinks />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
