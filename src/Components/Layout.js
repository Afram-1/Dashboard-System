import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import TableContent from "./TableContent";
import UseDashbourd from "../Hooks/UseDashbourd";

const DashboardLayout = () => {
  const { loading, error } = UseDashbourd();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container-fluid p-0">
      <div className="d-flex min-vh-100">
        {/* Sidebar Desktop */}
        <div className="d-none d-md-block">
          <Sidebar />
        </div>

        {/* Right Side */}
        <div className="flex-grow-1 d-flex flex-column">
          <Navbar />

          <div className="flex-grow-1 bg-body-secondary p-4">
            <MainContent />
            <TableContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
