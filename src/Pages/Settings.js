import React from "react";
import Sidebar from "../Components/Sidebar";
import UseDashbourd from "../Hooks/UseDashbourd";

const Settings = () => {
  const { loading, error } = UseDashbourd();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      <Sidebar />
      <h1>This Page Settings</h1>
    </div>
  );
};

export default Settings;
